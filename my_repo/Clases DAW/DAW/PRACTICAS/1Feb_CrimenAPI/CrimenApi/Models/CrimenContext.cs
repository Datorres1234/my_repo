using Microsoft.EntityFrameworkCore;

namespace CrimenApi.Models
{   
    public class CrimenContext: DbContext
    {
        public CrimenContext(DbContextOptions <CrimenContext> options): base(options)
        
    {

    }
     public DbSet< CrimenItem > CrimenItems {get; set;}

    }
    
}