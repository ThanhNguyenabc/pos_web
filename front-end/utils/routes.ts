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

  static Categories = "/categories";
  static PizzeriaPOS = `${this.Categories}/pizzeria`;
  static QuickServicePOS = `${this.Categories}/quick-service-restaurants`;
  static RetailPOS = `${this.Categories}/retail-store`;
  static FullServicePOS = `${this.Categories}/full-service`;
  static ClubPOS = `${this.Categories}/bar-clubs`;
  static SmallBusinessPOS = `${this.Categories}/small-business`;
}

export default AppRoutes;
