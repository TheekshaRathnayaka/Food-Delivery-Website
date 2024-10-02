import frontImage from './frontImage.jpg'
import search from './search.png'
import bag from './bag.png'
import logo from './logo.png'
import menu1 from './menu1.jpg'
import menu2 from './menu2.jpg'
import menu3 from './menu3.jpg'
import menu4 from './menu4.jpg'
import menu5 from './menu5.jpg'
import menu6 from './menu6.jpg'
import menu7 from './menu7.jpg'
import menu8 from './menu8.jpg'
import rating_stars from './rating_stars.png'
import add_icon_green from './add_icon_green.png'
import add_icon_white from './add_icon_white.png'
import remove_icon_red from './remove_icon_red.png'
import facebook from './facebook.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'
import play_store from './play_store.png'
import app_store from './app_store.png'
import Banana_cake from './Banana_cake.jpg'
import Black_forest_cakes from './Black_forest_cakes.jpg'
import carrot_cake from './carrot_cake.jpg'
import chocolate_cake_with_strawberry_top from './chocolate_cake_with_strawberry_top.jpg'
import red_fruit_cake from './red_fruit_cake.jpg'
import Chocolate_panna_cotta from './Chocolate_panna_cotta.jpg'
import chocolate_pudding_with_almonds from './chocolate_pudding_with_almonds.jpg'
import Creme_brulee_pudding from './Creme_brulee_pudding.jpg'
import ice_cream_dessert_with_bananas from './ice_cream_dessert_with_bananas.jpg'
import ice_cream_with_chocolate from './ice_cream_with_chocolate.jpg'
import chicken_pad_thai_noodles from './chicken_pad_thai_noodles.jpg'
import Heart_pasta from './Heart_pasta.jpg'
import Pasta_sausage from './Pasta_sausage.jpg'
import Penne_pasta from './Penne_pasta.jpg'
import ramen from './ramen.jpg'
import chocolate_cupcake from './chocolate_cupcake.jpg'
import cookies from './cookies.jpg'
import croissants from './croissants.jpg'
import donuts from './donuts.jpg'
import Waffles from './Waffles.jpg'
import cheese_pizza from './cheese_pizza.jpg'
import vege_pizza from './vege_pizza.jpg'
import italian_pizza from './italian_pizza.jpg'
import chicken_pizza from './chicken_pizza.jpg'
import bellpepper_pizza from './bellpepper_pizza.jpg'
import vegetable_salad from './vegetable_salad.jpg'
import hearty_salad from './hearty_salad.jpg'
import vegetable_meat_soup from './vegetable_meat_soup.jpg'
import herb_soup from './herb_soup.jpg'
import borsch_soup from './borsch_soup.jpg'
import lobster from './lobster.jpg'
import crawfish from './crawfish.jpg'
import crabs from './crabs.jpg'
import octopus from './octopus.jpg'
import prawns from './prawns.jpg'
import lime_mojito from './lime_mojito.jpg'
import red_mojito from './red_mojito.jpg'
import papaya_banana from './papaya_banana.jpg'
import orange from './orange.jpg'
import watermelon from './watermelon.jpg'
import cross_icon from './cross_icon.png'

export const assets = {
    frontImage,
    search,
    bag,
    logo,
    menu1,
    menu2,
    menu3,
    menu4,
    menu5,
    menu6,
    menu7,
    menu8,
    rating_stars,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    facebook,
    twitter,
    linkedin,
    play_store,
    app_store,
    cross_icon
}

export const menu_list = [
    {
        menu_name: "Cake",
        menu_image: menu1
    },
    {
        menu_name: "Desserts",
        menu_image: menu2
    },
    {
        menu_name: "Noodles",
        menu_image: menu3
    },
    {
        menu_name: "Pastry",
        menu_image: menu4
    },
    {
        menu_name: "Pizza",
        menu_image: menu5
    },
    {
        menu_name: "Salad",
        menu_image: menu6
    },
    {
        menu_name: "Sea Food",
        menu_image: menu7
    },
    {
        menu_name: "Beverages",
        menu_image: menu8
    }
]

export const food_list = [
    {
        _id: "1",
        name: "Banana cake",
        image: Banana_cake,
        price: "4",
        description: "A moist and fluffy cake made with ripe bananas, perfect for any occasion.",
        category: "cakes"
      },
      {
        _id: "2",
        name: "Black forest cake",
        image: Black_forest_cakes,
        price: "6",
        description: "A rich chocolate cake layered with whipped cream and cherries, a German classic.",
        category: "cakes"
      },
      {
        _id: "3",
        name: "Carrot cake",
        image: carrot_cake,
        price: "5",
        description: "A soft spiced cake with grated carrots, topped with cream cheese frosting.",
        category: "cakes"
      },
      {
        _id: "4",
        name: "Strawberry top Chocolate cake",
        image: chocolate_cake_with_strawberry_top,
        price: "7",
        description: "Decadent chocolate cake topped with fresh strawberries, combining sweetness and richness.",
        category: "cakes"
      },
      {
        _id: "5",
        name: "Red fruit cake",
        image: red_fruit_cake,
        price: "6",
        description: "A delicious cake packed with the flavors of red berries, perfect for a fruity delight.",
        category: "cakes"
      },
      {
        _id: "6",
        name: "Chocolate panna cotta",
        image: Chocolate_panna_cotta,
        price: "8",
        description: "A smooth and creamy vanila dessert with an indulgent texture.",
        category: "desserts"
      },
      {
        _id: "7",
        name: "Chocolate pudding",
        image: chocolate_pudding_with_almonds,
        price: "9",
        description: "A rich chocolate pudding topped with crunchy almonds for a satisfying bite.",
        category: "desserts"
      },
      {
        _id: "8",
        name: "Creme brulee-pudding",
        image: Creme_brulee_pudding,
        price: "7",
        description: "A classic French dessert with a smooth custard base and a caramelized sugar top.",
        category: "desserts"
      },
      {
        _id: "9",
        name: "Ice cream with bananas",
        image: ice_cream_dessert_with_bananas,
        price: "7",
        description: "Creamy ice cream served with fresh bananas, a refreshing treat for any season.",
        category: "desserts"
      },
      {
        _id: "10",
        name: "Ice cream with chocolate",
        image: ice_cream_with_chocolate,
        price: "7",
        description: "Rich and creamy chocolate ice cream that melts in your mouth with every bite.",
        category: "desserts"
      },
      {
        _id: "11",
        name: "Thai noodles",
        image: chicken_pad_thai_noodles,
        price: "12",
        description: "Stir-fried rice noodles with tender chicken, peanuts, and fresh vegetables in a tangy sauce.",
        category: "noodles & pasta"
      },
      {
        _id: "12",
        name: "Heart pasta",
        image: Heart_pasta,
        price: "11",
        description: "Heart-shaped pasta with juicy chicken and ripe tomatoes, a comforting dish for any meal.",
        category: "noodles & pasta"
      },
      {
        _id: "13",
        name: "Pasta with sausage",
        image: Pasta_sausage,
        price: "11",
        description: "A hearty pasta dish with spicy sausage, fresh tomatoes, and fragrant basil.",
        category: "noodles & pasta"
      },
      {
        _id: "14",
        name: "Penne pasta",
        image: Penne_pasta,
        price: "11",
        description: "Classic penne pasta served with a light tomato sauce and fresh herbs.",
        category: "noodles & pasta"
      },
      {
        _id: "15",
        name: "Ramen noodles",
        image: ramen,
        price: "12",
        description: "A steaming bowl of ramen noodles in a savory broth with assorted toppings.",
        category: "noodles & pasta"
      },
      {
        _id: "16",
        name: "Chocolate cupcake",
        image: chocolate_cupcake,
        price: "3",
        description: "A rich, moist chocolate cupcake with a creamy frosting on top.",
        category: "pastry"
      },
      {
        _id: "17",
        name: "Cookies",
        image: cookies,
        price: "2",
        description: "Freshly baked cookies with a perfect balance of softness and crunch.",
        category: "pastry"
      },
      {
        _id: "18",
        name: "Croissants",
        image: croissants,
        price: "4",
        description: "Flaky and buttery croissants, ideal for breakfast or a quick snack.",
        category: "pastry"
      },
      {
        _id: "19",
        name: "Donuts",
        image: donuts,
        price: "3",
        description: "Soft and fluffy donuts with a sweet glaze or chocolate drizzle.",
        category: "pastry"
      },
      {
        _id: "20",
        name: "Waffles",
        image: Waffles,
        price: "4",
        description: "Crispy waffles topped with fresh strawberries and blueberries, perfect for breakfast or dessert.",
        category: "pastry"
      },
      {
        _id: "21",
        name: "Cheese pizza",
        image: cheese_pizza,
        price: "12",
        description: "A classic cheese pizza with a perfectly crispy crust and melted mozzarella.",
        category: "pizza"
      },
      {
        _id: "22",
        name: "Vege pizza",
        image: vege_pizza,
        price: "10",
        description: "A delicious pizza loaded with fresh vegetables and a sprinkle of cheese.",
        category: "pizza"
      },
      {
        _id: "23",
        name: "Italian pizza",
        image: italian_pizza,
        price: "11",
        description: "Authentic Italian-style pizza with a thin crust and a variety of fresh toppings.",
        category: "pizza"
      },
      {
        _id: "24",
        name: "Chicken & mushrooms pizza",
        image: chicken_pizza,
        price: "12",
        description: "Juicy chicken and flavorful mushrooms on a crispy pizza base with melted cheese.",
        category: "pizza"
      },
      {
        _id: "25",
        name: "Bell pepper pizza",
        image: bellpepper_pizza,
        price: "10",
        description: "A vibrant pizza topped with fresh bell peppers and cheese on a crispy crust.",
        category: "pizza"
      },
      {
        _id: "26",
        name: "Vegetable Salad",
        image: vegetable_salad,
        price: "6",
        description: "A refreshing salad with a variety of fresh vegetables, perfect as a healthy side.",
        category: "salad & soup"
      },
      {
        _id: "27",
        name: "Healthy Hearty salad",
        image: hearty_salad,
        price: "8",
        description: "A wholesome salad packed with tuna, vegetables, and protein for a nutritious meal.",
        category: "salad & soup"
      },
      {
        _id: "28",
        name: "Vegetable soup",
        image: vegetable_meat_soup,
        price: "8",
        description: "A comforting soup with tender meat, fresh vegetables, and hearty potatoes.",
        category: "salad & soup"
      },
      {
        _id: "29",
        name: "Chopped Herbs Soup",
        image: herb_soup,
        price: "6",
        description: "A light and flavorful soup with fresh herbs and crunchy crackers on the side.",
        category: "salad & soup"
      },
      {
        _id: "30",
        name: "Borsch soup",
        image: borsch_soup,
        price: "6",
        description: "A traditional Ukrainian soup made with beets, meat, and vegetables for a rich flavor.",
        category: "salad & soup"
      },
      {
        _id: "31",
        name: "Lobster seafood dish",
        image: lobster,
        price: "20",
        description: "A succulent lobster dish served with a side of butter sauce for an indulgent meal.",
        category: "sea food"
      },
      {
        _id: "32",
        name: "Crawfish seafood dish",
        image: crawfish,
        price: "17",
        description: "Fresh crawfish served with garlic butter sauce for a seafood lover’s delight.",
        category: "sea food"
      },
      {
        _id: "33",
        name: "Crabs seafood dish",
        image: crabs,
        price: "18",
        description: "Delicious crabs cooked to perfection and served with a lemon butter dip.",
        category: "sea food"
      },
      {
        _id: "34",
        name: "Octopus legs seafood dish",
        image: octopus,
        price: "21",
        description: "Tender octopus legs with a tangy lemon sauce, fresh mint, and berries.",
        category: "sea food"
      },
      {
        _id: "35",
        name: "Grilled prawns seafood dish",
        image: prawns,
        price: "16",
        description: "Juicy prawns grilled to perfection, served with a side of garlic butter sauce.",
        category: "sea food"
      },
      {
        _id: "36",
        name: "Lemon lime green mojito",
        image: lime_mojito,
        price: "4",
        description: "A refreshing mojito with zesty lime, fresh mint, and a touch of sweetness.",
        category: "beverages"
      },
      {
        _id: "37",
        name: "Red cocktail mojito",
        image: red_mojito,
        price: "4",
        description: "A vibrant red cocktail mojito with fruity flavors and a refreshing kick.",
        category: "beverages"
      },
      {
        _id: "38",
        name: "Juice with papaya and banana",
        image: papaya_banana,
        price: "3",
        description: "A tropical juice blend of papaya and banana for a healthy and delicious drink.",
        category: "beverages"
      },
      {
        _id: "39",
        name: "Orange juice",
        image: orange,
        price: "3",
        description: "Freshly squeezed orange juice packed with vitamin C and natural sweetness.",
        category: "beverages"
      },
      {
        _id: "40",
        name: "Watermelon juice",
        image: watermelon,
        price: "3",
        description: "A refreshing watermelon juice, perfect for a hot day or a light snack.",
        category: "beverages"
      }      
]

