// ***********************************************************************
// CAPA DE ORM GENERADA AUTOMATICAMENTE DE LA TABLA [FacturaProvisional]
// Generada por: Nombre del autor
// Fecha: 11/01/2017
// ***********************************************************************

using System;
using System.Data;
using System.Linq;

namespace ImpuestosTrad
{
	public partial class FacturaProvisional : IDisposable
	{
		#region "Propiedades"
		public int IDFacturaProv { get; set; }
		public string NumFactura { get; set; }
		public string CodCliente { get; set; }
		public string Ambito { get; set; }
		public DateTime Fecha { get; set; }
		public double Base { get; set; }
		public double Descuento { get; set; }
		public double TipoIVA { get; set; }
		public double TipoIRPF { get; set; }
		#endregion

		#region "Mantenimiento o CRUD"
		private EnumerableRowCollection<FacturaProvisional> GetCollectionFromDataTable(DataTable dt)
		{
			var iEnum = dt.AsEnumerable().Select(row => new FacturaProvisional
			{
				IDFacturaProv = Convert.ToInt32(row["IDFacturaProv"]),
				NumFactura = row["NumFactura"].ToString(),
				CodCliente = row["CodCliente"].ToString(),
				Ambito = row["Ambito"].ToString(),
				Fecha = Convert.ToDateTime(row["Fecha"]),
				Base = Convert.ToDouble(row["Base"]),
				Descuento = Convert.ToDouble(row["Descuento"] is DBNull ? 0 : row["Descuento"]) ,
				TipoIVA = Convert.ToDouble(row["TipoIVA"] is DBNull ? 0 : row["TipoIVA"]),
				TipoIRPF = Convert.ToDouble(row["TipoIRPF"] is DBNull ? 0 : row["TipoIRPF"])
			});
			return iEnum;
		}

		public EnumerableRowCollection<FacturaProvisional> GetAll()
		{
			var dt = Conexion.GetDataTable("SELECT * FROM [FacturaProvisional]");
			var iEnum = this.GetCollectionFromDataTable(dt);
			dt.Dispose();
			return iEnum;
		}

        public EnumerableRowCollection<FacturaProvisional> GetAllbyPage(int offset, int first)
        {
            var dt = Conexion.GetDataTable($"SELECT * FROM FacturaProvisional order by Fecha desc offset {offset} rows fetch first {first} rows only");
            var iEnum = this.GetCollectionFromDataTable(dt);
            dt.Dispose();
            return iEnum;
        }

        public FacturaProvisional Get(int clavePrimaria)
		{
			var dt = Conexion.GetDataTable($"SELECT * FROM [FacturaProvisional] WHERE IDFacturaProv = {clavePrimaria}");
			var iEnum = this.GetCollectionFromDataTable(dt);
			dt.Dispose();
			return iEnum.FirstOrDefault();
		}

		public int Add(FacturaProvisional obj)
		{
			//string erroresValidacion = this.ValidationErrors(obj);
   //         if (erroresValidacion != "") throw new ApplicationException(erroresValidacion);
            string SQL = $"INSERT INTO [FacturaProvisional] (NumFactura,CodCliente,Ambito,Fecha,Base,Descuento,TipoIVA,TipoIRPF) VALUES ('{obj.NumFactura}','{obj.CodCliente}','{obj.Ambito}',CONVERT(DATETIME,'{obj.Fecha}',103),{obj.Base.ToString().Replace(",",".")},{obj.Descuento.ToString().Replace(",", ".")},{obj.TipoIVA.ToString().Replace(",", ".")},{obj.TipoIRPF.ToString().Replace(",", ".")})";
			Conexion.ExecuteSQL(SQL);
			return obj.IDFacturaProv;
		}

		public int Update(FacturaProvisional obj)
		{
			string SQL = $"UPDATE [FacturaProvisional] SET NumFactura='{obj.NumFactura}',CodCliente='{obj.CodCliente}',Ambito='{obj.Ambito}',Fecha=CONVERT(DATETIME,'{obj.Fecha}',103),Base={obj.Base.ToString().Replace(",",".")},Descuento={obj.Descuento.ToString().Replace(",", ".")},TipoIVA={obj.TipoIVA.ToString().Replace(",", ".")},TipoIRPF={obj.TipoIRPF.ToString().Replace(",", ".")} WHERE IDFacturaProv={obj.IDFacturaProv}";
			Conexion.ExecuteSQL(SQL);
			return obj.IDFacturaProv;
		}

		public bool Delete(int clavePrimaria)
		{
			string SQL = $"DELETE FROM [FacturaProvisional] WHERE IDFacturaProv={clavePrimaria}";
			Conexion.ExecuteSQL(SQL);
			return true;
		}

		//public string ValidationErrors(FacturaProvisional obj)
		//{
		//	return this.Extension_ValidationErrors(obj);
		//}

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
