//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApiExam.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class CartMaster
    {
        public int CartID { get; set; }
        public Nullable<int> UserID { get; set; }
        public Nullable<int> ProductID { get; set; }
        public string ProdName { get; set; }
        public Nullable<int> ProdPrice { get; set; }
        public Nullable<int> ProdQty { get; set; }
        public Nullable<int> ProdTotal { get; set; }
        public string Tag { get; set; }
    
        public virtual ProductMaster ProductMaster { get; set; }
        public virtual SignUp SignUp { get; set; }
    }
}
