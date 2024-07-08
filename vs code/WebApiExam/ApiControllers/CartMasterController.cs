using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiExam.Models;
using System.Web;
using System.Web.Http.Cors;

namespace WebApiExam.ApiControllers
{

    [EnableCors(origins: "*", headers: "*", methods: "*", exposedHeaders: "SampleHeader")]
    public class CartMasterController : ApiController
    {
        public List<CartMaster> GetOrder()
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities database = new WebApiDataBaseEntities();
                List<CartMaster> cartList = database.CartMasters.ToList();
                return cartList;
            }
            catch (Exception)
            {

                throw;
            }

        }
        public CartMaster GetCart(int ID)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities database = new WebApiDataBaseEntities();
                CartMaster cart = database.CartMasters.Where(temp => temp.UserID == ID).FirstOrDefault();
                return cart;
            }
            catch (Exception)
            {

                throw;
            }

        }
    }
}
