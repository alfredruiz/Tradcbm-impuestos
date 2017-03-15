using System;
using System.Collections.Generic;
using System.Web.Script.Serialization;

namespace ImpuestosTrad
{


  // Your Organization serializer. Override the key methods for the desired date format.
  // This example formats the date as MM/dd/yyyy
  public class CustomSerializer : JavaScriptSerializer
  {
    public string CurrentDateFormat { get; set; }

    public CustomSerializer(string dateFormat) : base()
    {
      this.CurrentDateFormat = dateFormat;
      this.RegisterConverters(new JavaScriptConverter[] { new DateStringJSONConverter() });
    }
  }


  public class DateStringJSONConverter : JavaScriptConverter
  {
    private List<Type> supportedTypes;

    public DateStringJSONConverter()
    {
      supportedTypes = new List<Type>(1);
      supportedTypes.Add(typeof(DateTime));
    }

    public override object Deserialize(IDictionary<string,Object>dictionary, Type type, JavaScriptSerializer serializer)
    {
      //DateTime dt = DateTime.ParseExact(dictionary["DateString"].ToString(), "dd/MM/yyyy", null);
      DateTime dt = DateTime.ParseExact(dictionary["DateString"].ToString(), GetFormatString(serializer), null);
      return dt;
    }

    private string GetFormatString(JavaScriptSerializer serializer)
    {
      var formatString = "MM/dd/yyyy";
      var mySerializer = serializer as CustomSerializer;
      if (mySerializer != null) formatString = mySerializer.CurrentDateFormat;
      return formatString;
    }


    public override IDictionary<string,Object> Serialize(object obj, JavaScriptSerializer serializer)
    {
      DateTime dt = Convert.ToDateTime(obj);
      Dictionary<string,Object> dicDateTime = new Dictionary<string,Object>(1);
      //dicDateTime.Add("DateString", dt.ToString("dd/MM/yyyy"));
      dicDateTime.Add("DateString", dt.ToString(GetFormatString(serializer)));
      return dicDateTime;
    }

    /*
    public override object Deserialize(IDictionary<string, object> dictionary, Type type, JavaScriptSerializer serializer)
    {
      throw new NotImplementedException();
    }
    */

    public override IEnumerable<Type> SupportedTypes
    {
      get { return this.supportedTypes; }
    }

    /*
    public override IEnumerable<Type> SupportedTypes
    {
      get
      {
        throw new NotImplementedException();
      }
    }
    */

  }

  // In your xhr layer, replace the standard Javascript serializer with your own.
  // var javaScriptSerializer = new JavaScriptSerializer(); Don't use the standard serializer use below

  //var javaScriptSerializer = new YourOrg_JavaScriptSerializer();
  // Serialize your model data: javaScriptSerializer.Serialize(model.Data);


}
