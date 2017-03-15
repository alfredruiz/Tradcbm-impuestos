using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;
using System.Collections;


namespace ImpuestosTrad
{
    public class Usuario
    {

        //métodos para establcer y recuperar datos. Cremos un método por cada atributo
        public int UsuarioID { get; set; }
        public string NombreUsuario { get; set; }
        public string CorreoElectronico{ get; set; }
        public string Contrasena { get; set; }

        private string ValidationErrors(Usuario usu)
        {
            string errores = "";
            //if (usu.UsuarioID == 0) errores += "Falta el id de usuario\r\n"; 
            //no se valida el usuarioId pq en la BD es autonumérico
            if (usu.NombreUsuario == "") errores += "Falta el nombre de usuario\r\n";
            if (usu.CorreoElectronico == "") errores += "Falta el correo electrónico\r\n";
            if (usu.Contrasena == "") errores += "Falta la contraseña\r\n";
            return errores;
        }

        private EnumerableRowCollection<Usuario> GetCollectionFromDataTable(DataTable dt)
        {
            var iEnum = dt.AsEnumerable().Select(row => new Usuario
            {
                UsuarioID = Convert.ToInt32(row["usuarioID"].ToString()),
                NombreUsuario = row["nombreUsuario"].ToString(),
                CorreoElectronico = row["correoElectronico"].ToString(),
                Contrasena = row["contrasena"].ToString()
            });
            return iEnum;
        }

        public EnumerableRowCollection<Usuario> GetAll()
        {
            var dt = Conexion.GetDataTable("SELECT * FROM [CalPro20].[dbo].[usuario]");
            var iEnum = this.GetCollectionFromDataTable(dt);
            dt.Dispose();
            return iEnum;
        }

        public Usuario Get(int clavePrimaria)
        {
            var dt = Conexion.GetDataTable(string.Format("SELECT * FROM [CalPro20].[dbo].[usuario]" +
                                                            " WHERE usuarioID='{0}'"
                                                            , clavePrimaria));
            var iEnum = this.GetCollectionFromDataTable(dt);
            dt.Dispose();
            return iEnum.FirstOrDefault();
        }

        public Usuario GetByUserName(string nombreUsuario)
        {
            var dt = Conexion.GetDataTable(string.Format("SELECT * FROM [CalPro20].[dbo].[usuario]" +
                                                            " WHERE nombreUsuario='{0}'"
                                                            , nombreUsuario));
            var iEnum = this.GetCollectionFromDataTable(dt);
            dt.Dispose();
            return iEnum.FirstOrDefault();
        }



        public int Add(Usuario usu)
        {
            // Validar datos
            string erroresValidacion = this.ValidationErrors(usu);
            if (erroresValidacion != "") throw new ApplicationException(erroresValidacion);
            // Insertar        
            string SQL = string.Format("INSERT INTO [CalPro20].[dbo].[usuario]" +
                                        " (nombreUsuario,correoElectronico,contrasena)" +
                                        "VALUES ('{0}','{1}','{2}')"
                                        , usu.NombreUsuario, usu.CorreoElectronico, usu.Contrasena);
            Conexion.ExecuteSQL(SQL);
            // Devolver
            return usu.UsuarioID;
        }

        public int Update(Usuario usu)
        {

            string SQL = string.Format("UPDATE [CalPro20].[dbo].[usuario]" +
                                        " SET nombreUsuario='{1}', correoElectronico='{2}', contrasena='{3}'" +
                                        " WHERE UsuarioID='{0}'"
                                        , usu.UsuarioID, usu.NombreUsuario, usu.CorreoElectronico, usu.Contrasena);
            Conexion.ExecuteSQL(SQL);
            // Devolver
            return usu.UsuarioID;
        }

        public bool Delete(int usuarioID)
        {
            try
            {
                // Validar datos        
                if (usuarioID == 0) throw new ApplicationException("No se ha indicado registro para borrar.");
                // Eliminar
                string SQL = string.Format("DELETE FROM [CalPro20].[dbo].[usuario]" +
                                            " WHERE usuarioID='{0}'"
                                            , usuarioID);
                Conexion.ExecuteSQL(SQL);
                // Devolver
                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }


        public Usuario LoginUsuario(string correoElectronico, string contrasena)
        {
            var dt = Conexion.GetDataTable(string.Format("SELECT * FROM [CalPro20].[dbo].[usuario]" +
                                                            " WHERE correoElectronico='{0}' and contrasena='{1}' "
                                                            , correoElectronico,  contrasena));
            var iEnum = this.GetCollectionFromDataTable(dt);
            dt.Dispose();
            return iEnum.FirstOrDefault();
        }



    }
}