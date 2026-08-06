import imgImmune from "@/assets/product-super-immune.jpg";
import imgGreens from "@/assets/product-super-greens.png";
import imgSalt    from "@/assets/product-better-salt.jpg";
import imgGclean  from "@/assets/product-super-gclean.png";
import imgZyme    from "@/assets/product-super-zyme.jpg";

export interface ProductSummary {
  slug:    string;
  name:    string;
  engName: string;
  image:   string;
}

export const productCatalog: Record<string, ProductSummary> = {
  "super-immune": { slug: "super-immune", name: "슈퍼이뮨",   engName: "SUPER IMMUNE",  image: imgImmune },
  "super-greens": { slug: "super-greens", name: "슈퍼그린",   engName: "SUPER GREENS",  image: imgGreens },
  "better-salt":  { slug: "better-salt",  name: "베러솔트",   engName: "BETTER SALT",   image: imgSalt   },
  "super-gclean": { slug: "super-gclean", name: "슈퍼지클린", engName: "SUPER G.CLEAN", image: imgGclean },
  "super-zyme":   { slug: "super-zyme",   name: "슈퍼자임",   engName: "SUPER ZYME",    image: imgZyme   },
};
