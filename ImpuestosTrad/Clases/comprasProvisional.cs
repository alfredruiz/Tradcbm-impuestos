// ***********************************************************************
// CAPA DE ORM GENERADA AUTOMATICAMENTE DE LA TABLA comprasProvisional
// Generada por: Nombre del autor
// Fecha: 22/12/2016
// ***********************************************************************

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace ImpuestosTrad
{
	public partial class comprasProvisional : IDisposable
	{
		#region "Propiedades"
		public int IDCompras { get; set; }
		public string RazonSocial { get; set; }
		public string NumFactura { get; set; }
		public string Concepto { get; set; }
		public DateTime Fecha { get; set; }
		public double BaseFactura { get; set; }
		public double TipoIva { get; set; }
		public string Observaciones { get; set; }
		#endregion

		#region "Mantenimiento o CRUD"
		private EnumerableRowCollection<comprasProvisional> GetCollectionFromDataTable(DataTable dt)
		{
			var iEnum = dt.AsEnumerable().Select(row => new comprasProvisional
			{
				IDCompras = Convert.ToInt32(row["IDCompras"]),
				RazonSocial = row["RazonSocial"].ToString(),
				NumFactura = row["NumFactura"].ToString(),
				Concepto = row["Concepto"].ToString(),
				Fecha = Convert.ToDateTime(row["Fecha"]),
				BaseFactura = Convert.ToDouble(row["BaseFactura"]),
				TipoIva = Convert.ToDouble(row["TipoIva"] is DBNull ? 0: row["TipoIva"]),
				Observaciones = row["Observaciones"].ToString(),
			});
			return iEnum;
		}

		public EnumerableRowCollection<comprasProvisional> GetAll()
		{
			var dt = Conexion.GetDataTable("SELECT * FROM comprasProvisional order by Fecha desc SELECT count(*) as total FROM comprasProvisional");
			var iEnum = this.GetCollectionFromDataTable(dt);
            dt.Dispose();
			return iEnum;
		}

        
        //public comprasProvisional GetAllCount()
        //{

        //    var dt = Conexion.Scalar("select count(*) as resultado from comprasProvisional");
        //    var iEnum = this.GetCollectionFromDataTable(dt);
        //    Conexion.Scalar.GetCollectionFromDataTable(dt);
        //    return iEnum;
        //}


        public EnumerableRowCollection<comprasProvisional> GetAllByPage(int offset, int first)
        {
            var dt = Conexion.GetDataTable($"SELECT * FROM comprasProvisional order by Fecha desc offset {offset} rows fetch first {first} rows only");
            var iEnum = this.GetCollectionFromDataTable(dt);
            dt.Dispose();
            return iEnum;
        }


        public comprasProvisional Get(int clavePrimaria)
		{
			var dt = Conexion.GetDataTable($"SELECT * FROM comprasProvisional WHERE IDCompras = {clavePrimaria} ");
			var iEnum = this.GetCollectionFromDataTable(dt);
			dt.Dispose();
			return iEnum.FirstOrDefault();
		}


        public int Add(comprasProvisional obj)
		{
			//string erroresValidacion = this.ValidationErrors(obj);
            //if (erroresValidacion != "") throw new ApplicationException(erroresValidacion);
            string SQL = $"INSERT INTO comprasProvisional (RazonSocial,NumFactura,Concepto,Fecha,BaseFactura,TipoIva,Observaciones) VALUES ('{obj.RazonSocial}','{obj.NumFactura}','{obj.Concepto}', CONVERT(DATETIME,'{obj.Fecha}',103),{obj.BaseFactura.ToString().Replace(",",".")},{obj.TipoIva.ToString().Replace(",",".")},'{obj.Observaciones}')";
            Conexion.ExecuteSQL(SQL);
			return obj.IDCompras;
		}

		public int Update(comprasProvisional obj)
		{
			string SQL = $"UPDATE comprasProvisional SET RazonSocial='{obj.RazonSocial}',NumFactura='{obj.NumFactura}',Concepto='{obj.Concepto}',Fecha= CONVERT(DATETIME,'{obj.Fecha}',103),BaseFactura={obj.BaseFactura.ToString().Replace(",",".")},TipoIva={obj.TipoIva.ToString().Replace(",",".")},Observaciones='{obj.Observaciones}' WHERE IDCompras={obj.IDCompras}";
            Conexion.ExecuteSQL(SQL);
			return obj.IDCompras;
		}

		public bool Delete(int clavePrimaria)
		{
			string SQL = $"DELETE FROM comprasProvisional WHERE IDCompras={clavePrimaria}";
            Conexion.ExecuteSQL(SQL);
			return true;
		}

		//public string ValidationErrors(comprasProvisional obj)
		//{
		//	return this.Extension_ValidationErrors(obj);
		//}

  //      private string Extension_ValidationErrors(comprasProvisional obj)
  //      {
  //          throw new NotImplementedException();
  //      }

        #endregion

        #region "Dispose"
        bool disposed = false;
		System.Runtime.InteropServices.SafeHandle handle = new Microsoft.Win32.SafeHandles.SafeFileHandle(IntPtr.Zero, true);

		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}

		protected virtual void Dispose(bool disposing)
		{
			if (disposed) return;
			if (disposing) handle.Dispose();
			disposed = true;
		}
		#endregion
	}
}
