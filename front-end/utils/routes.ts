import { CategoryType } from "models/category_type";

class AppRoutes {
  static HomePage = "/";
  static AboutPage = "/about";
  static BlogPage = "/blog";
  static ContactPage = "/contact";
  static FreePOSPage = "/free-pos";
  static QuestionnairePage = "/questionnaire";
  static BreadmePage = "/bread-me";
  static BreadmeQuestionPage = "/bread-me-questions";
  static POSDetailPage = "/product";
  static PartnerPage = "/partner";
  static SuggestPOSPage = "/suggest-pos";

  static CategoryPage = "/categories";
  static PizzeriaPOS = `${this.CategoryPage}/${CategoryType.pizza}`;
  static QuickServicePOS = `${this.CategoryPage}/${CategoryType.quick_service}`;
  static RetailPOS = `${this.CategoryPage}/${CategoryType.retail}`;
  static FullServicePOS = `${this.CategoryPage}/${CategoryType.full_service}`;
  static ClubPOS = `${this.CategoryPage}/${CategoryType.club}`;
  static SmallBusinessPOS = `${this.CategoryPage}/${CategoryType.small_business}`;
}

export default AppRoutes;
