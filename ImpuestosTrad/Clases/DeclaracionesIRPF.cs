// ***********************************************************************
// CAPA DE ORM GENERADA AUTOMATICAMENTE DE LA TABLA DeclaracionesIRPF
// Generada por: Nombre del autor
// Fecha: 23/01/2017
// ***********************************************************************

using System;
using System.Data;
using System.Linq;

namespace ImpuestosTrad
{
	public partial class DeclaracionesIRPF : IDisposable
	{
		#region "Propiedades"
		public int IdDeclaracionIRPF { get; set; }
		public DateTime FechaCreacion { get; set; }
		public int Ejercicio { get; set; }
		public int Trimestre { get; set; }
		public double IRPF01 { get; set; }
		public double IRPF02 { get; set; }
		public double IRPF03 { get; set; }
		public double IRPF04 { get; set; }
		public double IRPF05 { get; set; }
		public double IRPF06 { get; set; }
		public double IRPF07 { get; set; }
		public double IRPF08 { get; set; }
		public double IRPF09 { get; set; }
		public double IRPF10 { get; set; }
		public double IRPF11 { get; set; }
		public double IRPF12 { get; set; }
		public double IRPF13 { get; set; }
		public double IRPF14 { get; set; }
		public double IRPF15 { get; set; }
		public double IRPF16 { get; set; }
		public double IRPF17 { get; set; }
		public double IRPF18 { get; set; }
		public double IRPF19 { get; set; }
		public double IRPF19I { get; set; }
		public string IBAN { get; set; }
		public string JustificanteAnt { get; set; }
		public bool Complementaria { get; set; }
		#endregion

		#region "Mantenimiento o CRUD"
		private EnumerableRowCollection<DeclaracionesIRPF> GetCollectionFromDataTable(DataTable dt)
		{
			var iEnum = dt.AsEnumerable().Select(row => new DeclaracionesIRPF
			{
				IdDeclaracionIRPF = Convert.ToInt32(row["IdDeclaracionIRPF"]),
				FechaCreacion = Convert.ToDateTime(row["FechaCreacion"]),
				Ejercicio = Convert.ToInt32(row["Ejercicio"]),
				Trimestre = Convert.ToInt32(row["Trimestre"]),
				IRPF01 = Convert.ToDouble(row["IRPF01"]),
				IRPF02 = Convert.ToDouble(row["IRPF02"]),
				IRPF03 = Convert.ToDouble(row["IRPF03"]),
				IRPF04 = Convert.ToDouble(row["IRPF04"]),
				IRPF05 = Convert.ToDouble(row["IRPF05"]),
				IRPF06 = Convert.ToDouble(row["IRPF06"]),
				IRPF07 = Convert.ToDouble(row["IRPF07"]),
				IRPF08 = Convert.ToDouble(row["IRPF08"]),
				IRPF09 = Convert.ToDouble(row["IRPF09"]),
				IRPF10 = Convert.ToDouble(row["IRPF10"]),
				IRPF11 = Convert.ToDouble(row["IRPF11"]),
				IRPF12 = Convert.ToDouble(row["IRPF12"]),
				IRPF13 = Convert.ToDouble(row["IRPF13"]),
				IRPF14 = Convert.ToDouble(row["IRPF14"]),
				IRPF15 = Convert.ToDouble(row["IRPF15"]),
				IRPF16 = Convert.ToDouble(row["IRPF16"]),
				IRPF17 = Convert.ToDouble(row["IRPF17"]),
				IRPF18 = Convert.ToDouble(row["IRPF18"]),
				IRPF19 = Convert.ToDouble(row["IRPF19"]),
				IRPF19I = Convert.ToDouble(row["IRPF19I"]),
				IBAN = row["IBAN"].ToString(),
				JustificanteAnt = row["JustificanteAnt"].ToString(),
				Complementaria = Convert.ToBoolean(row["Complementaria"])
			});
			return iEnum;
		}

		public EnumerableRowCollection<DeclaracionesIRPF> GetAll()
		{
			var dt = Conexion.GetDataTable("SELECT * FROM DeclaracionesIRPF");
			var iEnum = this.GetCollectionFromDataTable(dt);
			dt.Dispose();
			return iEnum;
		}

		public DeclaracionesIRPF Get(int clavePrimaria)
		{
			var dt = Conexion.GetDataTable($"SELECT * FROM DeclaracionesIRPF WHERE IdDeclaracionIRPF = {clavePrimaria}");
			var iEnum = this.GetCollectionFromDataTable(dt);
			dt.Dispose();
			return iEnum.FirstOrDefault();
		}

		public int Add(DeclaracionesIRPF obj)
		{
			//string erroresValidacion = this.ValidationErrors(obj);
   //         if (erroresValidacion != "") throw new ApplicationException(erroresValidacion);
            string SQL = $"INSERT INTO DeclaracionesIRPF (FechaCreacion,Ejercicio,Trimestre,IRPF01,IRPF02,IRPF03,IRPF04,IRPF05,IRPF06,IRPF07,IRPF08,IRPF09,IRPF10,IRPF11,IRPF12,IRPF13,IRPF14,IRPF15,IRPF16,IRPF17,IRPF18,IRPF19,IRPF19I,IBAN,JustificanteAnt,Complementaria) VALUES ('{obj.FechaCreacion}',{obj.Ejercicio},{obj.Trimestre},{obj.IRPF01.ToString().Replace(",",".")},{obj.IRPF02.ToString().Replace(",",".")},{obj.IRPF03.ToString().Replace(",",".")},{obj.IRPF04.ToString().Replace(",",".")},{obj.IRPF05.ToString().Replace(",",".")},{obj.IRPF06.ToString().Replace(",",".")},{obj.IRPF07.ToString().Replace(",",".")},{obj.IRPF08.ToString().Replace(",",".")},{obj.IRPF09.ToString().Replace(",",".")},{obj.IRPF10.ToString().Replace(",",".")},{obj.IRPF11.ToString().Replace(",",".")},{obj.IRPF12.ToString().Replace(",",".")},{obj.IRPF13.ToString().Replace(",",".")},{obj.IRPF14.ToString().Replace(",",".")},{obj.IRPF15.ToString().Replace(",",".")},{obj.IRPF16.ToString().Replace(",",".")},{obj.IRPF17.ToString().Replace(",",".")},{obj.IRPF18.ToString().Replace(",",".")},{obj.IRPF19.ToString().Replace(",",".")},{obj.IRPF19I.ToString().Replace(",",".")},'{obj.IBAN}','{obj.JustificanteAnt}','{obj.Complementaria}')";
			Conexion.ExecuteSQL(SQL);
			return obj.IdDeclaracionIRPF;
		}

		public int Update(DeclaracionesIRPF obj)
		{
			string SQL = $"UPDATE DeclaracionesIRPF SET FechaCreacion='{obj.FechaCreacion}',Ejercicio={obj.Ejercicio},Trimestre={obj.Trimestre},IRPF01={obj.IRPF01.ToString().Replace(",",".")},IRPF02={obj.IRPF02.ToString().Replace(",",".")},IRPF03={obj.IRPF03.ToString().Replace(",",".")},IRPF04={obj.IRPF04.ToString().Replace(",",".")},IRPF05={obj.IRPF05.ToString().Replace(",",".")},IRPF06={obj.IRPF06.ToString().Replace(",",".")},IRPF07={obj.IRPF07.ToString().Replace(",",".")},IRPF08={obj.IRPF08.ToString().Replace(",",".")},IRPF09={obj.IRPF09.ToString().Replace(",",".")},IRPF10={obj.IRPF10.ToString().Replace(",",".")},IRPF11={obj.IRPF11.ToString().Replace(",",".")},IRPF12={obj.IRPF12.ToString().Replace(",",".")},IRPF13={obj.IRPF13.ToString().Replace(",",".")},IRPF14={obj.IRPF14.ToString().Replace(",",".")},IRPF15={obj.IRPF15.ToString().Replace(",",".")},IRPF16={obj.IRPF16.ToString().Replace(",",".")},IRPF17={obj.IRPF17.ToString().Replace(",",".")},IRPF18={obj.IRPF18.ToString().Replace(",",".")},IRPF19={obj.IRPF19.ToString().Replace(",",".")},IRPF19I={obj.IRPF19I.ToString().Replace(",",".")},IBAN='{obj.IBAN}',JustificanteAnt='{obj.JustificanteAnt}',Complementaria='{obj.Complementaria}' WHERE IdDeclaracionIRPF={obj.IdDeclaracionIRPF}";
			Conexion.ExecuteSQL(SQL);
			return obj.IdDeclaracionIRPF;
		}

		public bool Delete(int clavePrimaria)
		{
			string SQL = $"DELETE FROM DeclaracionesIRPF WHERE IdDeclaracionIRPF={clavePrimaria}";
			Conexion.ExecuteSQL(SQL);
			return true;
		}

		//public string ValidationErrors(DeclaracionesIRPF obj)
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
