﻿using System.Web;
using System.Web.Optimization;

namespace WebApiExam
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new Bundle("~/bundles/jquery").Include(
                          "~/Scripts/jquery-{version}.js"));            bundles.Add(new Bundle("~/bundles/jqueryval").Include(                        "~/Scripts/jquery.validate*"));            bundles.Add(new Bundle("~/bundles/jqueryui").Include(            "~/Scripts/jquery-ui-{version}.js"));
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new Bundle("~/bundles/modernizr").Include(
"~/Scripts/modernizr-*"));            bundles.Add(new Bundle("~/bundles/bootstrap").Include(                      "~/Scripts/bootstrap.js"));            bundles.Add(new StyleBundle("~/Content/css").Include(                      "~/Content/bootstrap.css",                      "~/Content/site.css"));            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(              "~/Content/themes/base/jquery.ui.core.css",              "~/Content/themes/base/jquery.ui.resizable.css",              "~/Content/themes/base/jquery.ui.selectable.css",              "~/Content/themes/base/jquery.ui.accordion.css",              "~/Content/themes/base/jquery.ui.autocomplete.css",              "~/Content/themes/base/jquery.ui.button.css",              "~/Content/themes/base/jquery.ui.dialog.css",              "~/Content/themes/base/jquery.ui.slider.css",              "~/Content/themes/base/jquery.ui.tabs.css",              "~/Content/themes/base/jquery.ui.datepicker.css",              "~/Content/themes/base/jquery.ui.progressbar.css",              "~/Content/themes/base/jquery.ui.theme.css"));
        }
    }
}
