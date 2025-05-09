const MyEnvironment = {

  getServiceUrl: (path) => {

    const env = MyEnvironment.Port;
    return new URL(`https://${path}-${env}${domainName}`);
  },

  Port: process.env.PORT || 5000,

  DbConnection: {
    host: process.env.host ||'159.65.13.107', 
    port: process.env.port || 3306,        
    user: process.env.user || 'root',  
    database: process.env.database || 'image_editor',  
    password:process.env.password || 'Rupp2357.!',  
    dialect: 'mysql',   
  },

  Jwt_Secret:process.env.jwt || 'da5c1746ffcd268f43be31aa5379b9da03e3aa91f0069ae3afa07b11543e6fee'

  
};

export default MyEnvironment;
