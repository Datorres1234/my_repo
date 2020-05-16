using Microsoft.EntityFrameworkCore;

namespace ProductoApi.Models
{   
    public class ProductoContext: DbContext
    {
        public ProductoContext(DbContextOptions <ProductoContext> options): base(options)
        
    {

    }
     public DbSet< ProductoItem > ProductoItems {get; set;}

    }
    
}