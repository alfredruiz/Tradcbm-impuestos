// ***********************************************************************
// CAPA DE ORM GENERADA AUTOMATICAMENTE DE LA TABLA Vista_FacturaTotal
// Generada por: Nombre del autor
// Fecha: 11/01/2017
// ***********************************************************************

using System;
using System.Data;
using System.Linq;

namespace ImpuestosTrad
{
	public partial class Vista_FacturaTotal : IDisposable
	{
		#region "Propiedades"
		public int IDFacturaProv { get; set; }
		public string CodCliente { get; set; }
		public string NumFactura { get; set; }
		public DateTime Fecha { get; set; }
		public int Ejercicio { get; set; }
		public int Trimestre { get; set; }
		public double Base { get; set; }
		public int Descuento { get; set; }
		public int TipoIRPF { get; set; }
		public int TipoIVA { get; set; }
		public string Ambito { get; set; }
		public double TotalIVA { get; set; }
		public double TotalIRPF { get; set; }
		public double TOTALFACTURA { get; set; }
		#endregion

		#region "Mantenimiento o CRUD"
		private EnumerableRowCollection<Vista_FacturaTotal> GetCollectionFromDataTable(DataTable dt)
		{
			var iEnum = dt.AsEnumerable().Select(row => new Vista_FacturaTotal
			{
				IDFacturaProv = Convert.ToInt32(row["IDFacturaProv"]),
				CodCliente = row["CodCliente"].ToString(),
				NumFactura = row["NumFactura"].ToString(),
				Fecha = Convert.ToDateTime(row["Fecha"]),
				Ejercicio = Convert.ToInt32(row["Ejercicio"]),
				Trimestre = Convert.ToInt32(row["Trimestre"]),
				Base = Convert.ToDouble(row["Base"]),
				Descuento = Convert.ToInt32(row["Descuento"]),
				TipoIRPF = Convert.ToInt32(row["TipoIRPF"]),
				TipoIVA = Convert.ToInt32(row["TipoIVA"]),
				Ambito = row["Ambito"].ToString(),
				TotalIVA = Convert.ToDouble(row["TotalIVA"]),
				TotalIRPF = Convert.ToDouble(row["TotalIRPF"]),
				TOTALFACTURA = Convert.ToDouble(row["TOTALFACTURA"])
			});
			return iEnum;
		}

		public EnumerableRowCollection<Vista_FacturaTotal> GetAll()
		{
			var dt = Conexion.GetDataTable("SELECT * FROM Vista_FacturaTotal order by IDFacturaProv desc");
			var iEnum = this.GetCollectionFromDataTable(dt);
			dt.Dispose();
			return iEnum;
		}

        public EnumerableRowCollection<Vista_FacturaTotal> GetAllByPage(int offset, int first)
        {
            var dt = Conexion.GetDataTable($"SELECT * FROM Vista_FacturaTotal order by Fecha desc offset {offset} rows fetch first {first} rows only");
            var iEnum = this.GetCollectionFromDataTable(dt);
            dt.Dispose();
            return iEnum;
        }

        public Vista_FacturaTotal Get(string clavePrimaria)
		{
			var dt = Conexion.GetDataTable($"SELECT * FROM Vista_FacturaTotal WHERE IDFacturaProv = {clavePrimaria}");
			var iEnum = this.GetCollectionFromDataTable(dt);
			dt.Dispose();
			return iEnum.FirstOrDefault();
		}

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
