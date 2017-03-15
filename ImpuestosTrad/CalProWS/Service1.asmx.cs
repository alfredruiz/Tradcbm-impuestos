
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Xml;
using System.Data;
using System.Data.SqlClient;
using System.Collections;
using ImpuestosTrad;

namespace ImpuestosTrad
{
    /// <summary>
    /// Descripción breve de Service1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/", Name = "ImpuestosTrad", Description = "ImpuestosTrad 1.0")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class Service1 : System.Web.Services.WebService
    {

        public Service1()
        {

            //**CADENA CONEXION LOCAL**
            //ImpuestosTrad.Conexion.CadenaConexion = @"Data Source=ALFREDO-VIRTUAL;Initial Catalog=CalPro20;Persist Security Info=True;User ID=alfredo;Password=alfredo";

            //**CADENA CONEXION LOCAL ANFRITRION**
            Conexion.CadenaConexion = @"Data Source=ALFREDO-PC;Initial Catalog=TradCBM_Impuestos;Integrated Security=True";


            /* Como el objeto CadaneConexión de la clase ClsConexion es estático es accesible desde cualquier lugar
             de la apliación, por tanto se le da contenido en la clase (web service) desde el que se va a utilizar.
             Para ello se ha cread una función pública con el nombre del servicio para que se inice de forma automática.*/
        }


        #region Métodos Clase ComprasPR

        [WebMethod]
        public void ComprasPrVer(string callback)
        {
            var CP = new comprasProvisional();
            var resul = CP.GetAll();

            //var o = new JavaScriptSerializer();
            //var json = o.Serialize(resul);
            //o = null; usu = null;
            //return json;


            var json = ObjectToJSon(resul);

            /*  - se crea la variable usu para instanciar la clase Clsusuario
                - se iguala usu al método alojado en dicha clase
                - se crea la varible o como instancia de la función de serializacion
                - la variable json para serializar la instancia de clase usu
                - se devuelven json */

            // Devolver a Ajax
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            sb.Append(callback + "(");
            sb.Append(json);
            sb.Append(");");

            Context.Response.Clear();
            Context.Response.ContentType = "application/json";
            Context.Response.Charset = "utf-8";
            Context.Response.Write(sb.ToString());
            Context.Response.End();
        }

       
        [WebMethod]
        public void ComprasPrVerporPag(string callback, int offset, int first)
        {
            var CP = new comprasProvisional();
            var resul = CP.GetAllByPage(offset, first);

            //var o = new JavaScriptSerializer();
            //var json = o.Serialize(resul);
            //o = null; usu = null;
            //return json;


            var json = ObjectToJSon(resul);

            /*  - se crea la variable usu para instanciar la clase Clsusuario
                - se iguala usu al método alojado en dicha clase
                - se crea la varible o como instancia de la función de serializacion
                - la variable json para serializar la instancia de clase usu
                - se devuelven json */

            // Devolver a Ajax
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            sb.Append(callback + "(");
            sb.Append(json);
            sb.Append(");");

            Context.Response.Clear();
            Context.Response.ContentType = "application/json";
            Context.Response.Charset = "utf-8";
            Context.Response.Write(sb.ToString());
            Context.Response.End();
        }

        [WebMethod]
        public void CompraVer(string callback, int IDCompras)
        {
            var CP = new comprasProvisional();
            CP = CP.Get(IDCompras);

            //var o = new JavaScriptSerializer();
            //var json = o.Serialize(CP);
            //o = null; usu = null;
            //return json;
            var json = ObjectToJSon(CP);


            // Devolver a Ajax
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            sb.Append(callback + "(");
            sb.Append(json);
            sb.Append(");");

            Context.Response.Clear();
            Context.Response.ContentType = "application/json";
            Context.Response.Charset = "utf-8";
            Context.Response.Write(sb.ToString());
            Context.Response.End();
        }

        //[WebMethod]
        //public void CompraContar(string callback, comprasProvisional cpr)
        //{
        //    var CP = new comprasProvisional();
        //    CP = CP.GetAllCount(cpr);

        //    //var o = new JavaScriptSerializer();
        //    //var json = o.Serialize(CP);
        //    //o = null; usu = null;
        //    //return json;
        //    var json = ObjectToJSon(CP);


        //    // Devolver a Ajax
        //    System.Text.StringBuilder sb = new System.Text.StringBuilder();
        //    sb.Append(callback + "(");
        //    sb.Append(json);
        //    sb.Append(");");

        //    Context.Response.Clear();
        //    Context.Response.ContentType = "application/json";
        //    Context.Response.Charset = "utf-8";
        //    Context.Response.Write(sb.ToString());
        //    Context.Response.End();

        //    Console.WriteLine(json);
        //}


        [WebMethod]
        [ScriptMethod(UseHttpGet = false, ResponseFormat = ResponseFormat.Json)]

        public void ComprasPrAgregar(string compraspr)
        {
            var CP = new comprasProvisional();
            var o = new JavaScriptSerializer();
            var jsoncompras = FormatearCadenaJSON(compraspr);
            CP = o.Deserialize<comprasProvisional>(jsoncompras);
            CP.Add(CP);



            /*  - Esta vez se pide un parámetro que llegará enviado por angularjs desde la aplicación web
                - se crea la variable usu para instanciar la clase Clsusuario
                - se iguala usu a la función de deserializar el parámetro usuario recibido y que se envía a la clase ClsUsuario
                - se llama al método Add pasándole usu ya deserializado como parámetro */
        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = false, ResponseFormat = ResponseFormat.Json)]
        //ScriptMethod indica al método que no se trata de un GET y así lo convierte en POST pudiendo recibir el JSON
        public void ComprasPrModificar(string compraspr)
        {
            var CP = new comprasProvisional();
            var o = new JavaScriptSerializer();
            var jsoncompras = FormatearCadenaJSON(compraspr);
            CP = o.Deserialize<comprasProvisional>(jsoncompras);
            CP.Update(CP);
        }

        [WebMethod]
        public void ComprasPrEliminar(int IDCompras)
        {
            var CP = new comprasProvisional();
            CP = CP.Get(IDCompras);
            CP.Delete(IDCompras);
        }

        //[WebMethod]
        //public void ConsultaEliminar(int consultaID)
        //{
        //    var cons = new Consulta();
        //    cons = cons.Get(consultaID);
        //    cons.Delete(consultaID);
        //}
        #endregion

        #region Métodos Clase FacturasPR

        [WebMethod]
        public void FacturasPrVer(string callback)
        {
            var FP = new FacturaProvisional();
            var resul = FP.GetAll();

            //var o = new JavaScriptSerializer();
            //var json = o.Serialize(resul);
            //o = null; usu = null;
            //return json;


            var json = ObjectToJSon(resul);

            /*  - se crea la variable usu para instanciar la clase Clsusuario
                - se iguala usu al método alojado en dicha clase
                - se crea la varible o como instancia de la función de serializacion
                - la variable json para serializar la instancia de clase usu
                - se devuelven json */

            // Devolver a Ajax
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            sb.Append(callback + "(");
            sb.Append(json);
            sb.Append(");");

            Context.Response.Clear();
            Context.Response.ContentType = "application/json";
            Context.Response.Charset = "utf-8";
            Context.Response.Write(sb.ToString());
            Context.Response.End();
        }


        [WebMethod]
        public void FacturasPrVerporPag(string callback, int offset, int first)
        {
            var FP = new FacturaProvisional();
            var resul = FP.GetAllbyPage(offset, first);

            //var o = new JavaScriptSerializer();
            //var json = o.Serialize(resul);
            //o = null; usu = null;
            //return json;


            var json = ObjectToJSon(resul);

            /*  - se crea la variable usu para instanciar la clase Clsusuario
                - se iguala usu al método alojado en dicha clase
                - se crea la varible o como instancia de la función de serializacion
                - la variable json para serializar la instancia de clase usu
                - se devuelven json */

            // Devolver a Ajax
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            sb.Append(callback + "(");
            sb.Append(json);
            sb.Append(");");

            Context.Response.Clear();
            Context.Response.ContentType = "application/json";
            Context.Response.Charset = "utf-8";
            Context.Response.Write(sb.ToString());
            Context.Response.End();
        }

        [WebMethod]
        public void FacturaVer(string callback, int IDFacturaProv)
        {
            var FP = new FacturaProvisional();
            FP = FP.Get(IDFacturaProv);

            //var o = new JavaScriptSerializer();
            //var json = o.Serialize(CP);
            //o = null; usu = null;
            //return json;
            var json = ObjectToJSon(FP);


            // Devolver a Ajax
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            sb.Append(callback + "(");
            sb.Append(json);
            sb.Append(");");

            Context.Response.Clear();
            Context.Response.ContentType = "application/json";
            Context.Response.Charset = "utf-8";
            Context.Response.Write(sb.ToString());
            Context.Response.End();
        }

        //[WebMethod]
        //public void CompraContar(string callback, comprasProvisional cpr)
        //{
        //    var CP = new comprasProvisional();
        //    CP = CP.GetAllCount(cpr);

        //    //var o = new JavaScriptSerializer();
        //    //var json = o.Serialize(CP);
        //    //o = null; usu = null;
        //    //return json;
        //    var json = ObjectToJSon(CP);


        //    // Devolver a Ajax
        //    System.Text.StringBuilder sb = new System.Text.StringBuilder();
        //    sb.Append(callback + "(");
        //    sb.Append(json);
        //    sb.Append(");");

        //    Context.Response.Clear();
        //    Context.Response.ContentType = "application/json";
        //    Context.Response.Charset = "utf-8";
        //    Context.Response.Write(sb.ToString());
        //    Context.Response.End();

        //    Console.WriteLine(json);
        //}


        [WebMethod]
        [ScriptMethod(UseHttpGet = false, ResponseFormat = ResponseFormat.Json)]

        public void FacturasPrAgregar(string facturaspr)
        {
            var FP = new FacturaProvisional();
            var o = new JavaScriptSerializer();
            var jsonfacturas = FormatearCadenaJSON(facturaspr);
            FP = o.Deserialize<FacturaProvisional>(jsonfacturas);
            FP.Add(FP);



            /*  - Esta vez se pide un parámetro que llegará enviado por angularjs desde la aplicación web
                - se crea la variable usu para instanciar la clase Clsusuario
                - se iguala usu a la función de deserializar el parámetro usuario recibido y que se envía a la clase ClsUsuario
                - se llama al método Add pasándole usu ya deserializado como parámetro */
        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = false, ResponseFormat = ResponseFormat.Json)]
        //ScriptMethod indica al método que no se trata de un GET y así lo convierte en POST pudiendo recibir el JSON
        public void FacturasPrModificar(string facturaspr)
        {
            var FP = new FacturaProvisional();
            var o = new JavaScriptSerializer();
            var jsonfacturas = FormatearCadenaJSON(facturaspr);
            FP = o.Deserialize<FacturaProvisional>(jsonfacturas);
            FP.Update(FP);
        }

        [WebMethod]
        public void FacturasPrEliminar(int IDFacturasProv)
        {
            var FP = new FacturaProvisional();
            FP = FP.Get(IDFacturasProv);
            FP.Delete(IDFacturasProv);
        }



        //[WebMethod]
        //public void ConsultaEliminar(int consultaID)
        //{
        //    var cons = new Consulta();
        //    cons = cons.Get(consultaID);
        //    cons.Delete(consultaID);
        //}
        #endregion

        #region Métodos Vista ComprasTotal

        [WebMethod]
        public void VistaComprasPrVer(string callback)
        {
            var VCT = new Vista_ComprasTotal();
            var resul = VCT.GetAll();

            //var o = new JavaScriptSerializer();
            //var json = o.Serialize(resul);
            //o = null; usu = null;
            //return json;


            var json = ObjectToJSon(resul);

            /*  - se crea la variable usu para instanciar la clase Clsusuario
                - se iguala usu al método alojado en dicha clase
                - se crea la varible o como instancia de la función de serializacion
                - la variable json para serializar la instancia de clase usu
                - se devuelven json */

            // Devolver a Ajax
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            sb.Append(callback + "(");
            sb.Append(json);
            sb.Append(");");

            Context.Response.Clear();
            Context.Response.ContentType = "application/json";
            Context.Response.Charset = "utf-8";
            Context.Response.Write(sb.ToString());
            Context.Response.End();
        }

       

        #endregion

        #region Métodos Vista FacturasTotal

        [WebMethod]
        public void VistaFacturasPrVer(string callback)
        {
            var VFP = new Vista_FacturaTotal();
            var resul = VFP.GetAll();

            //var o = new JavaScriptSerializer();
            //var json = o.Serialize(resul);
            //o = null; usu = null;
            //return json;


            var json = ObjectToJSon(resul);

            /*  - se crea la variable usu para instanciar la clase Clsusuario
                - se iguala usu al método alojado en dicha clase
                - se crea la varible o como instancia de la función de serializacion
                - la variable json para serializar la instancia de clase usu
                - se devuelven json */

            // Devolver a Ajax
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            sb.Append(callback + "(");
            sb.Append(json);
            sb.Append(");");

            Context.Response.Clear();
            Context.Response.ContentType = "application/json";
            Context.Response.Charset = "utf-8";
            Context.Response.Write(sb.ToString());
            Context.Response.End();
        }

        [WebMethod]
        public void VistaFacturasPrVerporPag(string callback, int offset, int first)
        {
            var VFP = new Vista_FacturaTotal();
            var resul = VFP.GetAllByPage(offset, first);

            //var o = new JavaScriptSerializer();
            //var json = o.Serialize(resul);
            //o = null; usu = null;
            //return json;


            var json = ObjectToJSon(resul);

            /*  - se crea la variable usu para instanciar la clase Clsusuario
                - se iguala usu al método alojado en dicha clase
                - se crea la varible o como instancia de la función de serializacion
                - la variable json para serializar la instancia de clase usu
                - se devuelven json */

            // Devolver a Ajax
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            sb.Append(callback + "(");
            sb.Append(json);
            sb.Append(");");

            Context.Response.Clear();
            Context.Response.ContentType = "application/json";
            Context.Response.Charset = "utf-8";
            Context.Response.Write(sb.ToString());
            Context.Response.End();
        }

        #endregion

        #region Métodos IRPF

        [WebMethod]
        public void IrpfVerLista(string callback)
        {
            var irp = new DeclaracionesIRPF();
            var resul = irp.GetAll();

            //var o = new JavaScriptSerializer();
            //var json = o.Serialize(resul);
            //o = null; usu = null;
            //return json;


            var json = ObjectToJSon(resul);

            /*  - se crea la variable usu para instanciar la clase Clsusuario
                - se iguala usu al método alojado en dicha clase
                - se crea la varible o como instancia de la función de serializacion
                - la variable json para serializar la instancia de clase usu
                - se devuelven json */

            // Devolver a Ajax
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            sb.Append(callback + "(");
            sb.Append(json);
            sb.Append(");");

            Context.Response.Clear();
            Context.Response.ContentType = "application/json";
            Context.Response.Charset = "utf-8";
            Context.Response.Write(sb.ToString());
            Context.Response.End();
        }

        [WebMethod]
        public void IrpfVer(string callback, int IdDeclaracionIRPF)
        {
            var irp = new DeclaracionesIRPF();
            irp = irp.Get(IdDeclaracionIRPF);

            //var o = new JavaScriptSerializer();
            //var json = o.Serialize(CP);
            //o = null; usu = null;
            //return json;
            var json = ObjectToJSon(irp);


            // Devolver a Ajax
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            sb.Append(callback + "(");
            sb.Append(json);
            sb.Append(");");

            Context.Response.Clear();
            Context.Response.ContentType = "application/json";
            Context.Response.Charset = "utf-8";
            Context.Response.Write(sb.ToString());
            Context.Response.End();
        }


        #endregion

        #region CONVERSIÓN DE JSON

        public static string ObjectToJSon(object objeto)
        {
            //CustomSerializer serializer = new CustomSerializer("yyyy-MM-dd HH:mm:ss");
            CustomSerializer serializer = new CustomSerializer("dd-MM-yyyy");

            var json = serializer.Serialize(objeto);
            json = FormatearCadenaJSON(json);
            serializer = null;
            return json;
        }

        private static string FormatearCadenaJSON(string json)
        {
            // Cambiar {"DateString": "fecha"} por solo la fecha
            int posFechaIni = json.IndexOf("{\"DateString\":");
            int posFechaFin = 0;
            while (posFechaIni >= 0)
            {
                posFechaFin = json.Substring(posFechaIni, json.Length - posFechaIni).IndexOf("}") + 1;
                string jsonOrigenString = json.Substring(posFechaIni, posFechaFin);
                string jsonDestinoString = jsonOrigenString.Replace("{\"DateString\":", "").Replace("}", "");
                json = json.Replace(jsonOrigenString, jsonDestinoString);
                json = json.Replace(" 00:00:00", "");
                // Siguiente fecha
                posFechaIni = json.IndexOf("{\"DateString\":");
            }
            // Devolver los true y false entre comillas
            json = json.Replace("true", "\"True\"");
            json = json.Replace("false", "\"False\"");
            // Resultado
            return json;
        }

        private static string FormatearCadenaJSONparaBD(string json)
        {
            // Cambiar {"DateString": "fecha"} por solo la fecha
            int posFechaIni = json.IndexOf("\"Fecha\":");
            int posFechaFin = 0;

            string dia = json.Substring(posFechaIni+7, 2);
            string anio = json.Substring(posFechaIni+14, 4);
            

            while (posFechaIni >= 0)
            {
                posFechaFin = json.Substring(posFechaIni, json.Length - posFechaIni).IndexOf("}") + 1;

                string jsonOrigenString = json.Substring(posFechaIni, posFechaFin);
                string jsonDestinoString = jsonOrigenString.Replace("{\"DateString\":", "").Replace("}", "");
                

                json = json.Replace(jsonOrigenString, jsonDestinoString);
                json = json.Replace(" 00:00:00", "");
                // Siguiente fecha
                posFechaIni = json.IndexOf("{\"DateString\":");
            }
            // Devolver los true y false entre comillas
            json = json.Replace(dia, anio).Replace(anio, dia);
            json = json.Replace("true", "\"True\"");
            json = json.Replace("false", "\"False\"");
            // Resultado
            return json;
        }





        #endregion


    }
}
