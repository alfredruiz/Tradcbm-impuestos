using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace CADCalPro
{
    public class Gastos_copia
    {

        public int GastosID { get; set; }
       
        //Gastos establecimiento

        public double Hardware { get; set; }                   public int HardwareY { get; set; }
        public double Software { get; set; }                   public int SoftwareY { get; set; }
        public double MaterialConsultaAlta { get; set; }       public int MaterialConsultaAltaY { get; set; }
        public double InstalTelefonoInternet { get; set; }     public int InstalTelefonoInternetY { get; set; }
        public double AlquilerOficina { get; set; }            public int AlquilerOficinaY { get; set; }
        public double MobiliarioOficina { get; set; }          public int MobiliarioOficinaY { get; set; }
        public double ImagenProfesional { get; set; }          public int ImagenProfesionalY { get; set; }
        public double GastosEstablVarios { get; set; }         public int GastosEstablVariosY { get; set; }

         //Gastos anuales

        public double MaterialConsultaRenov { get; set; }      public int MaterialConsultaRenovY { get; set; }
        public double HardwareRenov { get; set; }              public int HardwareRenovY { get; set; }
        public double SoftwareRenov { get; set; }              public int SoftwareRenovY { get; set; }
        public double Afiliaciones { get; set; }               public int AfiliacionesY { get; set; }
        public double Proteccion { get; set; }                 public int ProteccionY { get; set; }
        public double DominioInternet { get; set; }            public int DominioInternetY { get; set; }
        public double MaterialFungible { get; set; }           public int MaterialFungibleY { get; set; }
        public double Formacion { get; set; }                  public int FormacionY { get; set; }
        public double Publicidad { get; set; }                 public int PublicidadY { get; set; }
        public double Imprevistos { get; set; }                public int ImprevistosY { get; set; }
        public double PRL { get; set; }                        public int PRLY { get; set; }
        public double GastosAnualesVarios { get; set; }        public int GastosAnualesVariosY { get; set; }

        //Gastos mensuales

        public double AlquilerOficinaMensual { get; set; }     public int AlquilerOficinaMensualY { get; set; }
        public double SeguridadSocial { get; set; }            public int SeguridadSocialY { get; set; }
        public double SeguroMedico { get; set; }               public int SeguroMedicoY { get; set; }
        public double LuzCalefaccion { get; set; }             public int LuzCalefaccionY { get; set; }
        public double GestoriaLitigios { get; set; }           public int GestoriaLitigiosY { get; set; }
        public double AsesoriaAveriasInf { get; set; }         public int AsesoriaAveriasInfY { get; set; }
        public double AlojamientoWeb { get; set; }             public int AlojamientoWebY { get; set; }
        public double TelefonoInternetMensual { get; set; }    public int TelefonoInternetMensualY { get; set; }
        public double GastosMensualesVarios { get; set; }      public int GastosMensualesVariosY { get; set; }


        /* MÉTODOS */

        private string ValidationErrors(Gastos gas)
        {
            string errores = "";
            
            if (gas.Hardware == 0) errores += "Debe introducir una cantidad válida\r\n";                   if (gas.HardwareY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.Software == 0) errores += "Debe introducir una cantidad válida\r\n";                   if (gas.SoftwareY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.MaterialConsultaAlta == 0) errores += "Debe introducir una cantidad válida\r\n";       if (gas.MaterialConsultaAltaY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.InstalTelefonoInternet == 0) errores += "Debe introducir una cantidad válida\r\n";     if (gas.InstalTelefonoInternetY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.AlquilerOficina == 0) errores += "Debe introducir una cantidad válida\r\n";            if (gas.AlquilerOficinaY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.MobiliarioOficina == 0) errores += "Debe introducir una cantidad válida\r\n";          if (gas.MobiliarioOficinaY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.ImagenProfesional == 0) errores += "Debe introducir una cantidad válida\r\n";          if (gas.ImagenProfesionalY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.GastosEstablVarios == 0) errores += "Debe introducir una cantidad válida\r\n";         if (gas.GastosEstablVariosY == 0) errores += "Debe introducir una cantidad válida\r\n";

             //Gastos anuales

            if (gas.MaterialConsultaRenov == 0) errores += "Debe introducir una cantidad válida\r\n";      if (gas.MaterialConsultaRenovY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.HardwareRenov == 0) errores += "Debe introducir una cantidad válida\r\n";              if (gas.HardwareRenovY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.SoftwareRenov == 0) errores += "Debe introducir una cantidad válida\r\n";              if (gas.SoftwareRenovY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.Afiliaciones == 0) errores += "Debe introducir una cantidad válida\r\n";               if (gas.AfiliacionesY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.Proteccion == 0) errores += "Debe introducir una cantidad válida\r\n";                 if (gas.ProteccionY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.DominioInternet == 0) errores += "Debe introducir una cantidad válida\r\n";            if (gas.DominioInternetY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.MaterialFungible == 0) errores += "Debe introducir una cantidad válida\r\n";           if (gas.MaterialFungibleY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.Formacion == 0) errores += "Debe introducir una cantidad válida\r\n";                  if (gas.FormacionY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.Publicidad == 0) errores += "Debe introducir una cantidad válida\r\n";                 if (gas.PublicidadY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.Imprevistos == 0) errores += "Debe introducir una cantidad válida\r\n";                if (gas.ImprevistosY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.PRL == 0) errores += "Debe introducir una cantidad válida\r\n";                        if (gas.PRLY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.GastosAnualesVarios == 0) errores += "Debe introducir una cantidad válida\r\n";        if (gas.GastosAnualesVariosY == 0) errores += "Debe introducir una cantidad válida\r\n";

            //Gastos mensuales

            if (gas.AlquilerOficinaMensual == 0) errores += "Debe introducir una cantidad válida\r\n";     if (gas.AlquilerOficinaMensualY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.SeguridadSocial == 0) errores += "Debe introducir una cantidad válida\r\n";            if (gas.SeguridadSocialY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.SeguroMedico == 0) errores += "Debe introducir una cantidad válida\r\n";               if (gas.SeguroMedicoY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.LuzCalefaccion == 0) errores += "Debe introducir una cantidad válida\r\n";             if (gas.LuzCalefaccionY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.GestoriaLitigios == 0) errores += "Debe introducir una cantidad válida\r\n";           if (gas.GestoriaLitigiosY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.AsesoriaAveriasInf == 0) errores += "Debe introducir una cantidad válida\r\n";         if (gas.AsesoriaAveriasInfY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.AlojamientoWeb == 0) errores += "Debe introducir una cantidad válida\r\n";             if (gas.AlojamientoWebY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.TelefonoInternetMensual == 0) errores += "Debe introducir una cantidad válida\r\n";    if (gas.TelefonoInternetMensualY == 0) errores += "Debe introducir una cantidad válida\r\n";
            if (gas.GastosMensualesVarios == 0) errores += "Debe introducir una cantidad válida\r\n";      if (gas.GastosMensualesVariosY == 0) errores += "Debe introducir una cantidad válida\r\n";


            return errores;
        }

        private EnumerableRowCollection<Gastos> GetCollectionFromDataTable(DataTable dt)
        {
            var iEnum = dt.AsEnumerable().Select(row => new Gastos
            {
                GastosID = Convert.ToInt32(row["GastosID"].ToString()),
                
                //Gastos establecimiento

                Hardware = Convert.ToDouble(row["Hardware"].ToString()),
                HardwareY = Convert.ToInt32(row["HardwareY"].ToString()),
                Software = Convert.ToDouble(row["Software"].ToString()),                                SoftwareY = Convert.ToInt32(row["SoftwareY"].ToString()),
                MaterialConsultaAlta = Convert.ToDouble(row["MaterialConsultaAlta"].ToString()),        MaterialConsultaAltaY = Convert.ToInt32(row["MaterialConsultaAltaY"].ToString()),
                InstalTelefonoInternet = Convert.ToDouble(row["InstalTelefonoInternet"].ToString()),    InstalTelefonoInternetY = Convert.ToInt32(row["InstalTelefonoInternetY"].ToString()),
                AlquilerOficina = Convert.ToDouble(row["AlquilerOficina"].ToString()),                  AlquilerOficinaY = Convert.ToInt32(row["AlquilerOficinaY"].ToString()),
                MobiliarioOficina = Convert.ToDouble(row["MobiliarioOficina"].ToString()),              MobiliarioOficinaY = Convert.ToInt32(row["MobiliarioOficinaY"].ToString()),
                ImagenProfesional = Convert.ToDouble(row["ImagenProfesional"].ToString()),              ImagenProfesionalY = Convert.ToInt32(row["ImagenProfesionalY"].ToString()),
                GastosEstablVarios = Convert.ToDouble(row["GastosEstablVarios"].ToString()),            GastosEstablVariosY = Convert.ToInt32(row["GastosEstablVariosY"].ToString()),

                //Gastos anuales
                
                MaterialConsultaRenov = Convert.ToDouble(row["MaterialConsultaRenov"].ToString()),      MaterialConsultaRenovY = Convert.ToInt32(row["MaterialConsultaRenovY"].ToString()),
                HardwareRenov = Convert.ToDouble(row["HardwareRenov"].ToString()),                      HardwareRenovY = Convert.ToInt32(row["HardwareRenovY"].ToString()),
                SoftwareRenov = Convert.ToDouble(row["SoftwareRenov"].ToString()),                      SoftwareRenovY = Convert.ToInt32(row["SoftwareRenovY"].ToString()),
                Afiliaciones = Convert.ToDouble(row["Afiliaciones"].ToString()),                        AfiliacionesY = Convert.ToInt32(row["AfiliacionesY"].ToString()),
                Proteccion = Convert.ToDouble(row["Proteccion"].ToString()),                            ProteccionY = Convert.ToInt32(row["ProteccionY"].ToString()),
                DominioInternet = Convert.ToDouble(row["DominioInternet"].ToString()),                  DominioInternetY = Convert.ToInt32(row["DominioInternetY"].ToString()),
                MaterialFungible = Convert.ToDouble(row["MaterialFungible"].ToString()),                MaterialFungibleY = Convert.ToInt32(row["MaterialFungibleY"].ToString()),
                Formacion = Convert.ToDouble(row["Formacion"].ToString()),                              FormacionY = Convert.ToInt32(row["FormacionY"].ToString()),
                Publicidad = Convert.ToDouble(row["Publicidad"].ToString()),                            PublicidadY = Convert.ToInt32(row["PublicidadY"].ToString()),
                Imprevistos = Convert.ToDouble(row["Imprevistos"].ToString()),                          ImprevistosY = Convert.ToInt32(row["ImprevistosY"].ToString()),
                PRL = Convert.ToDouble(row["PRL"].ToString()),                                          PRLY = Convert.ToInt32(row["PRLY"].ToString()),
                GastosAnualesVarios = Convert.ToDouble(row["GastosAnualesVarios"].ToString()),          GastosAnualesVariosY = Convert.ToInt32(row["GastosAnualesVariosY"].ToString()),           

                //Gastos mensuales

                AlquilerOficinaMensual = Convert.ToDouble(row["AlquilerOficinaMensual"].ToString()),    AlquilerOficinaMensualY = Convert.ToInt32(row["AlquilerOficinaMensualY"].ToString()),
                SeguridadSocial = Convert.ToDouble(row["SeguridadSocial"].ToString()),                  SeguridadSocialY = Convert.ToInt32(row["SeguridadSocialY"].ToString()),
                SeguroMedico = Convert.ToDouble(row["SeguroMedico"].ToString()),                        SeguroMedicoY = Convert.ToInt32(row["SeguroMedicoY"].ToString()),
                LuzCalefaccion = Convert.ToDouble(row["LuzCalefaccion"].ToString()),                    LuzCalefaccionY = Convert.ToInt32(row["LuzCalefaccionY"].ToString()),
                GestoriaLitigios = Convert.ToDouble(row["GestoriaLitigios"].ToString()),                GestoriaLitigiosY = Convert.ToInt32(row["GestoriaLitigiosY"].ToString()),
                AsesoriaAveriasInf = Convert.ToDouble(row["AsesoriaAveriasInf"].ToString()),            AsesoriaAveriasInfY = Convert.ToInt32(row["AsesoriaAveriasInfY"].ToString()),
                AlojamientoWeb = Convert.ToDouble(row["AlojamientoWeb"].ToString()),                    AlojamientoWebY = Convert.ToInt32(row["AlojamientoWebY"].ToString()),
                TelefonoInternetMensual = Convert.ToDouble(row["TelefonoInternetMensual"].ToString()),  TelefonoInternetMensualY = Convert.ToInt32(row["TelefonoInternetMensualY"].ToString()),
                GastosMensualesVarios = Convert.ToDouble(row["GastosMensualesVarios"].ToString()),      GastosMensualesVariosY = Convert.ToInt32(row["GastosMensualesVariosY"].ToString()),


                
            });
            return iEnum;
        }

        public EnumerableRowCollection<Gastos> GetAll()
        {
            var dt = Conexion.GetDataTable("SELECT * FROM [CalPro20].[dbo].[gastos]");
            var iEnum = this.GetCollectionFromDataTable(dt);
            dt.Dispose();
            return iEnum;
        }

        public Gastos Get(int clavePrimaria)
        {
            var dt = Conexion.GetDataTable(string.Format("SELECT * FROM [CalPro20].[dbo].[gastos]" +
                                                            " WHERE GastosID='{0}'"
                                                            , clavePrimaria));
            var iEnum = this.GetCollectionFromDataTable(dt);
            dt.Dispose();
            return iEnum.FirstOrDefault();
        }

        public string Add(Gastos gas)
        {
            // Validar datos
            //string erroresValidacion = this.ValidationErrors(gas);
            //if (erroresValidacion != "") throw new ApplicationException(erroresValidacion);
            // Insertar        
            string SQL = string.Format("INSERT INTO [CalPro20].[dbo].[gastos]" +
                                        "(Hardware,                                 HardwareY,"+
                                        "Software,                                  SoftwareY,"+
                                        "MaterialConsultaAlta ,        MaterialConsultaAltaY ,"+
                                        "InstalTelefonoInternet ,    InstalTelefonoInternetY ,"+
                                        "AlquilerOficina ,                  AlquilerOficinaY ,"+
                                        "MobiliarioOficina ,              MobiliarioOficinaY ,"+
                                        "ImagenProfesional ,              ImagenProfesionalY ,"+
                                        "GastosEstablVarios ,            GastosEstablVariosY ,"+

                                        //Gastos anuales
                
                                        "MaterialConsultaRenov ,      MaterialConsultaRenovY ,"+
                                        "HardwareRenov ,                      HardwareRenovY ,"+
                                        "SoftwareRenov ,                      SoftwareRenovY ,"+
                                        "Afiliaciones ,                        AfiliacionesY ,"+
                                        "Proteccion ,                            ProteccionY ,"+
                                        "DominioInternet ,                  DominioInternetY ,"+
                                        "MaterialFungible ,                MaterialFungibleY ,"+
                                        "Formacion ,                              FormacionY ,"+
                                        "Publicidad ,                            PublicidadY ,"+
                                        "Imprevistos ,                          ImprevistosY ,"+
                                        "PRL ,                                          PRLY ,"+
                                        "GastosAnualesVarios ,          GastosAnualesVariosY ,"+         

                                        //Gastos mensuales

                                        "AlquilerOficinaMensual ,    AlquilerOficinaMensualY ,"+
                                        "SeguridadSocial ,                  SeguridadSocialY ,"+
                                        "SeguroMedico ,                        SeguroMedicoY ,"+
                                        "LuzCalefaccion ,                    LuzCalefaccionY ,"+
                                        "GestoriaLitigios ,                GestoriaLitigiosY ,"+
                                        "AsesoriaAveriasInf ,            AsesoriaAveriasInfY ,"+
                                        "AlojamientoWeb ,                    AlojamientoWebY ,"+
                                        "TelefonoInternetMensual ,  TelefonoInternetMensualY ,"+
                                        "GastosMensualesVarios ,      GastosMensualesVariosY)" +

                                        "VALUES ('{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}','{8}','{9}',"+
                                                "'{10}','{11}','{12}','{13}','{14}','{15}','{16}','{17}','{18}','{19}',"+
                                                "'{20}','{21}','{22}','{23}','{24}','{25}','{26}','{27}','{28}','{29}',"+
                                                "'{30}','{31}','{32}','{33}','{34}','{35}','{36}','{37}','{38}','{39}',"+
                                                "'{40}','{41}','{42}','{43}','{44}','{45}','{46}','{47}','{48}','{49}',"+
                                                "'{50}','{51}','{52}','{53}','{54}','{55}','{56}','{57}')",
                                                
                                                gas.Hardware,                                 gas.HardwareY,
                                                gas.Software,                                 gas.SoftwareY,
                                                gas.MaterialConsultaAlta,         gas.MaterialConsultaAltaY,
                                                gas.InstalTelefonoInternet,     gas.InstalTelefonoInternetY,
                                                gas.AlquilerOficina,                   gas.AlquilerOficinaY,
                                                gas.MobiliarioOficina,               gas.MobiliarioOficinaY,
                                                gas.ImagenProfesional,               gas.ImagenProfesionalY,
                                                gas.GastosEstablVarios,             gas.GastosEstablVariosY,

                                                //Gastos anuales
                
                                                gas.MaterialConsultaRenov,      gas.MaterialConsultaRenovY,
                                                gas.HardwareRenov,                      gas.HardwareRenovY,
                                                gas.SoftwareRenov,                      gas.SoftwareRenovY,
                                                gas.Afiliaciones,                        gas.AfiliacionesY,
                                                gas.Proteccion,                            gas.ProteccionY,
                                                gas.DominioInternet,                  gas.DominioInternetY,
                                                gas.MaterialFungible,                gas.MaterialFungibleY,
                                                gas.Formacion,                              gas.FormacionY,
                                                gas.Publicidad,                            gas.PublicidadY,
                                                gas.Imprevistos,                          gas.ImprevistosY,
                                                gas.PRL,                                          gas.PRLY,
                                                gas.GastosAnualesVarios,          gas.GastosAnualesVariosY,           

                                                //Gastos mensuales

                                                gas.AlquilerOficinaMensual,    gas.AlquilerOficinaMensualY,
                                                gas.SeguridadSocial,                  gas.SeguridadSocialY,
                                                gas.SeguroMedico,                        gas.SeguroMedicoY,
                                                gas.LuzCalefaccion,                    gas.LuzCalefaccionY,
                                                gas.GestoriaLitigios,                gas.GestoriaLitigiosY,
                                                gas.AsesoriaAveriasInf,            gas.AsesoriaAveriasInfY,
                                                gas.AlojamientoWeb,                    gas.AlojamientoWebY,
                                                gas.TelefonoInternetMensual,  gas.TelefonoInternetMensualY,
                                                gas.GastosMensualesVarios,      gas.GastosMensualesVariosY);
            
            Conexion.ExecuteSQL(SQL);
            // Devolver
            return (gas.GastosID).ToString();
        }

        public string Update(Gastos gas)
        {
            // Validar datos
            //string erroresValidacion = this.ValidationErrors(gas);
            //if (erroresValidacion != "") throw new ApplicationException(erroresValidacion);
            // Insertar        
            string SQL = string.Format("UPDATE [CalPro20].[dbo].[gastos]" +
                                        " SET "
                                        +"Hardware='{1}',                   HardwareY='{2}',"
                                        +"Software='{3}',                   SoftwareY='{4}',"
                                        +"MaterialConsultaAlta='{5}',       MaterialConsultaAltaY='{6}',"
                                        +"InstalTelefonoInternet='{7}',     InstalTelefonoInternetY='{8}',"
                                        +"AlquilerOficina='{9}',            AlquilerOficinaY='{10}',"
                                        +"MobiliarioOficina='{11}',         MobiliarioOficinaY='{12}',"
                                        +"ImagenProfesional='{13}',         ImagenProfesionalY='{14}',"
                                        +"GastosEstablVarios='{15}',        GastosEstablVariosY='{16}',"

                                        //Gastos anuales
                
                                        +"MaterialConsultaRenov='{17}',     MaterialConsultaRenovY='{18}',"
                                        +"HardwareRenov='{19}',             HardwareRenovY='{20}',"
                                        +"SoftwareRenov='{21}',             SoftwareRenovY='{22}',"
                                        +"Afiliaciones='{23}',              AfiliacionesY='{24}',"
                                        +"Proteccion='{25}',                ProteccionY='{26}',"
                                        +"DominioInternet='{27}',           DominioInternetY='{28}',"
                                        +"MaterialFungible='{29}',          MaterialFungibleY='{30}',"                                                
                                        +"Formacion='{31}',                 FormacionY='{32}',"
                                        +"Publicidad='{33}',                PublicidadY='{34}',"
                                        +"Imprevistos='{35}',               ImprevistosY='{36}',"
                                        +"PRL='{37}',                       PRLY='{38}',"
                                        +"GastosAnualesVarios='{39}',       GastosAnualesVariosY='{40}',"           

                                        //Gastos mensuales

                                        +"AlquilerOficinaMensual='{41}',      AlquilerOficinaMensualY='{42}',"
                                        +"SeguridadSocial='{43}',             SeguridadSocialY='{44}',"
                                        +"SeguroMedico='{45}',                SeguroMedicoY='{46}',"
                                        +"LuzCalefaccion='{47}',              LuzCalefaccionY='{48}',"
                                        +"GestoriaLitigios='{49}',            GestoriaLitigiosY='{50}',"
                                        +"AsesoriaAveriasInf='{51}',          AsesoriaAveriasInfY='{52}',"
                                        +"AlojamientoWeb='{53}',              AlojamientoWebY='{54}',"
                                        +"TelefonoInternetMensual='{55}',     TelefonoInternetMensualY='{56}',"
                                        +"GastosMensualesVarios='{57}',       GastosMensualesVariosY='{58}'"

                                        +" WHERE GastosID='{0}'",

                                        gas.GastosID,
                                        gas.Hardware,               gas.HardwareY,
                                        gas.Software,               gas.SoftwareY,
                                        gas.MaterialConsultaAlta,   gas.MaterialConsultaAltaY,
                                        gas.InstalTelefonoInternet, gas.InstalTelefonoInternetY,
                                        gas.AlquilerOficina,        gas.AlquilerOficinaY,
                                        gas.MobiliarioOficina,      gas.MobiliarioOficinaY,
                                        gas.ImagenProfesional,      gas.ImagenProfesionalY,
                                        gas.GastosEstablVarios,     gas.GastosEstablVariosY,

                                        //Gastos anuales

                                        gas.MaterialConsultaRenov,  gas.MaterialConsultaRenovY,
                                        gas.HardwareRenov,          gas.HardwareRenovY,
                                        gas.SoftwareRenov,          gas.SoftwareRenovY,
                                        gas.Afiliaciones,           gas.AfiliacionesY,
                                        gas.Proteccion,             gas.ProteccionY,
                                        gas.DominioInternet,        gas.DominioInternetY,
                                        gas.MaterialFungible,       gas.MaterialFungibleY,
                                        gas.Formacion,              gas.FormacionY,
                                        gas.Publicidad,             gas.PublicidadY,
                                        gas.Imprevistos,            gas.ImprevistosY,
                                        gas.PRL,                    gas.PRLY,
                                        gas.GastosAnualesVarios,    gas.GastosAnualesVariosY,

                                        //Gastos mensuales

                                        gas.AlquilerOficinaMensual, gas.AlquilerOficinaMensualY,
                                        gas.SeguridadSocial,        gas.SeguridadSocialY,
                                        gas.SeguroMedico,           gas.SeguroMedicoY,
                                        gas.LuzCalefaccion,         gas.LuzCalefaccionY,
                                        gas.GestoriaLitigios,       gas.GestoriaLitigiosY,
                                        gas.AsesoriaAveriasInf,     gas.AsesoriaAveriasInfY,
                                        gas.AlojamientoWeb,         gas.AlojamientoWebY,
                                        gas.TelefonoInternetMensual,gas.TelefonoInternetMensualY,
                                        gas.GastosMensualesVarios,  gas.GastosMensualesVariosY);

            Conexion.ExecuteSQL(SQL);
            // Devolver
            return (gas.GastosID).ToString();
        }

        public bool Delete(int gastosID)
        {
            try
            {
                // Validar datos        
                if (GastosID == 0) throw new ApplicationException("No se ha indicado registro para borrar.");
                // Eliminar
                string SQL = string.Format("DELETE FROM [CalPro20].[dbo].[gastos]" +
                                            " WHERE GastosID='{0}'"
                                            , gastosID);
                Conexion.ExecuteSQL(SQL);
                // Devolver
                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}