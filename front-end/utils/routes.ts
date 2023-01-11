class AppRoutes {
  static Dashboard = "/dashboard";
  static HomePage = "/";
  static AboutPage = "/about";
  static BlogPage = "/blog";
  static ContactPage = "/contact";
  static FreePOSPage = "/freepos";
  static QuestionnairePage = "/questionnaire";
  static ProcessingFeePage = "/posfee";
  static BreadmePage = "/breadme";

  static CategoryPage = "/categories";
  static PizzeriaPOS = `${this.CategoryPage}/pizzeria`;
  static QuickServicePOS = `${this.CategoryPage}/quick-service-restaurants`;
  static RetailPOS = `${this.CategoryPage}/retail-store`;
  static FullServicePOS = `${this.CategoryPage}/full-service`;
  static ClubPOS = `${this.CategoryPage}/bar-clubs`;
  static SmallBusinessPOS = `${this.CategoryPage}/small-business`;
}

export default AppRoutes;
