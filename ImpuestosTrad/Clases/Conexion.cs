using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace ImpuestosTrad
{
    public class Conexion
    {
        public static string CadenaConexion { get; set; }
        //Se plantea estática para que sea accesible desde cualquier lugar y se especificará en la clase en la 
        //que se vaya a usar (en el web service en este caso)


        public static DataTable GetDataTable(string SQL)
        {

            try
            {
                SqlConnection conexion = new SqlConnection(CadenaConexion);
                SqlDataAdapter comando = new SqlDataAdapter(SQL, conexion);
                DataSet ds = new DataSet();
                comando.Fill(ds);
                conexion.Close();
                comando.Dispose();
                conexion.Dispose();
                return ds.Tables[0];
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static int ExecuteSQL(string SQL)
        {
            try
            {
                SqlConnection conexion = new SqlConnection(CadenaConexion);
                SqlCommand comando = new SqlCommand();
                int resul = 0;
                comando.CommandText = SQL;
                comando.CommandType = CommandType.Text;
                comando.Connection = conexion;
                conexion.Open();
                resul = comando.ExecuteNonQuery();
                conexion.Close();
                conexion.Dispose();
                return resul;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //public static int Scalar(string SQL)
        //{
        //    try
        //    {
        //        SqlConnection conexion = new SqlConnection(CadenaConexion);
        //        SqlCommand comando = new SqlCommand();
        //        comando.CommandText = SQL;
        //        comando.CommandType = CommandType.Text;
        //        comando.Connection = conexion;
        //        conexion.Open();
        //        int resul = (int)comando.ExecuteScalar();
        //        conexion.Close();
        //        conexion.Dispose();
        //        return resul;
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }
        //}

        public static object NullToZero (object value)
        {
            if (value == null) { return 0; }
            else { return value;}
        }
    }
}