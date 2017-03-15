// ***********************************************************************
// CAPA DE ORM GENERADA AUTOMATICAMENTE DE LA TABLA Vista_ComprasTotal
// Generada por: Nombre del autor
// Fecha: 20/01/2017
// ***********************************************************************

using System;
using System.Data;
using System.Linq;

namespace ImpuestosTrad
{
	public partial class Vista_ComprasTotal : IDisposable
	{
		#region "Propiedades"
		public int IDCompras { get; set; }
		public string RazonSocial { get; set; }
        public string NumFactura { get; set; }
        public string Concepto { get; set; }
        public DateTime Fecha { get; set; }
		public int Ejercicio { get; set; }
		public int Trimestre { get; set; }
		public double BaseFactura { get; set; }
		public double TipoIva { get; set; }
		public double TotalIVA { get; set; }
		public double TotalFactura { get; set; }
		#endregion

		#region "Mantenimiento o CRUD"
		private EnumerableRowCollection<Vista_ComprasTotal> GetCollectionFromDataTable(DataTable dt)
		{
			var iEnum = dt.AsEnumerable().Select(row => new Vista_ComprasTotal
			{
				IDCompras = Convert.ToInt32(row["IDCompras"]),
				RazonSocial = row["RazonSocial"].ToString(),
                NumFactura = row["NumFactura"].ToString(),
                Concepto = row["Concepto"].ToString(),
                Fecha = Convert.ToDateTime(row["Fecha"]),
				Ejercicio = Convert.ToInt32(row["Ejercicio"]),
				Trimestre = Convert.ToInt32(row["Trimestre"]),
				BaseFactura = Convert.ToDouble(row["BaseFactura"]),
				TipoIva = Convert.ToDouble(row["TipoIva"]),
				TotalIVA = Convert.ToDouble(row["TotalIVA"]),
				TotalFactura = Convert.ToDouble(row["TotalFactura"])
			});
			return iEnum;
		}

		public EnumerableRowCollection<Vista_ComprasTotal> GetAll()
		{
			var dt = Conexion.GetDataTable("SELECT * FROM Vista_ComprasTotal order by IDCompras desc");
			var iEnum = this.GetCollectionFromDataTable(dt);
			dt.Dispose();
			return iEnum;
		}

		public Vista_ComprasTotal Get(string clavePrimaria)
		{
			var dt = Conexion.GetDataTable($"SELECT * FROM Vista_ComprasTotal WHERE IDCompras = {clavePrimaria}");
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
