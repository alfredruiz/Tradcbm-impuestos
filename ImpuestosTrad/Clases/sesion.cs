using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;


namespace ImpuestosTrad
{
    public class sesion
    {
        public string SesionID { get; set; }
        public int UsuarioID { get; set; }
        public string UsuarioNombre { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime FechaExpira { get; set; }


       
        private EnumerableRowCollection<sesion> GetCollectionFromDataTable(DataTable dt)
        {
            var iEnum = dt.AsEnumerable().Select(row => new sesion
            {
                SesionID = row["SesionID"].ToString(),
                UsuarioID = Convert.ToInt32(row["UsuarioID"]),
                UsuarioNombre = row["UsuarioNombre"].ToString(),
                FechaAlta = Convert.ToDateTime(row["FechaAlta"]),
                FechaExpira = Convert.ToDateTime(row["FechaExpira"])
            });
            return iEnum;
        }

        public EnumerableRowCollection<sesion> GetAll()
        {
            var dt = Conexion.GetDataTable("SELECT * FROM [CalPro20].[dbo].[sesion]");
            var iEnum = this.GetCollectionFromDataTable(dt);
            dt.Dispose();
            return iEnum;
        }

        public sesion Get(string clavePrimaria)
        {
            var dt = Conexion.GetDataTable(string.Format("SELECT * FROM [CalPro20].[dbo].[sesion]" +
                                                            " WHERE SesionID='{0}'"
                                                            , clavePrimaria));
            var iEnum = this.GetCollectionFromDataTable(dt);
            dt.Dispose();
            return iEnum.FirstOrDefault();
        }


        public string Add(sesion ses)
        {
            ses.SesionID = System.Guid.NewGuid().ToString();
            ses.FechaAlta = DateTime.UtcNow;
            ses.FechaExpira = DateTime.UtcNow.AddHours(24);

    
            string SQL = string.Format("INSERT INTO [CalPro20].[dbo].[sesion]" +
                                        "(SesionID,  UsuarioID, UsuarioNombre, FechaAlta, FechaExpira)" +

                                        "VALUES ('{0}','{1}','{2}','{3}','{4}')",

                                        ses.SesionID, ses.UsuarioID, ses.UsuarioNombre, ses.FechaAlta, ses.FechaExpira);

            Conexion.ExecuteSQL(SQL);
            // Devolver
            return ses.SesionID;
        }

        public string Update(sesion ses)
        {
            string SQL = "UPDATE [CalPro20].[dbo].[sesion] SET SesionID='{ses.SesionID}',UsuarioID={ses.UsuarioID},UsuarioNombre='{ses.UsuarioNombre}',FechaAlta='{ses.FechaAlta}',FechaExpira='{ses.FechaExpira}' WHERE SesionID='{ses.SesionID}'";
            Conexion.ExecuteSQL(SQL);
            return ses.SesionID.ToString();
        }

        public bool Delete(string clavePrimaria)
        {
            string SQL = "DELETE FROM [CalPro20].[dbo].[sesion] WHERE SesionID='{clavePrimaria}'";
            Conexion.ExecuteSQL(SQL);
            return true;
        }
    }
}