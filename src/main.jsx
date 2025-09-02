import { createRoot } from "react-dom/client"
import "./index.css"
import RecipeCard from "./RecipeCard.jsx"


const root = createRoot(document.getElementById('root'))
root.render(
  <>
  <header  className="menufood">Recipes Menu Card</header>
  <div className="align">
    <RecipeCard 
    RecipeName="Cappuccino"
    Time="Prep Time : 5 min | Cook Time : 10 min"
    Serving="Serves: 2 people"
    difficult="Difficulty: Easy"
    type="Type: Beverage"
    Src="https://img.freepik.com/premium-photo/isolated-cup-coffee-elevation-side-view-white-background_996379-12021.jpg?w=2000"
    ChefName="Arun" />
    <RecipeCard 
    RecipeName="Dosa"
    Time="Prep Time : 5 min | Cook Time : 10 min"
    Serving="Serves: 50 people"
    difficult="Difficulty: Medium"
    type="Type: Breakfast"
    Src="https://tse4.mm.bing.net/th/id/OIP.O3A3BTULImI_3AYAAS_gSwHaDw?pid=Api&P=0&h=220"
    ChefName="Krunal"/>
    <RecipeCard 
    RecipeName="Chicken Biryani" 
    Time="Prep Time : 30 min | Cook Time : 45 min"
    Serving="Serves: 6 people"
    difficult="Difficulty: Hard"
    type="Type: Lunch/Dinner"
    Src="https://tse4.mm.bing.net/th/id/OIP.2rubt7oRrm9ukL2Px8ku6gHaEK?pid=Api&P=0&h=220"
    ChefName="Pranay"/> 
    <RecipeCard 
    RecipeName="Dal with Rice" 
    Time="Prep Time : 10 min | Cook Time : 30 min"
    Serving="Serves: 6 people"
    difficult="Difficulty: Easy"
    type="Type: Beverage"
    Src="https://i.ytimg.com/vi/k8ZS1mQhL-8/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAx5jRi4jTPb-B1T_x-20cLk9v8OA"
    ChefName="Ravi"/>
    <RecipeCard 
    RecipeName="Chocolate Brownies" 
    Time="Prep Time : 15 min | Cook Time : 25 min"
    Serving="Serves: 8 people"
    difficult="Difficulty: Medium"
    type="Type: Dessert"
    Src="https://tse2.mm.bing.net/th/id/OIP.MBhNoUJpbzjz_1Q5ZATpdgHaHa?pid=Api&P=0&h=220"
    ChefName="Rishi"/> 
    <RecipeCard 
    RecipeName="Vegetable Rice" 
    Time="Prep Time : 10 min | Cook Time : 25 min"
    Serving="Serves: 4 people"
    difficult="Difficulty: Medium"
    type="Type: Lunch"
    Src="https://tse3.mm.bing.net/th/id/OIP.J0z2WuexUYygGUpbS52IRwHaDt?pid=Api&P=0&h=220"
    ChefName="Mahendra"/>
    <RecipeCard 
    RecipeName="Paneer Butter Masala" 
    Time="Prep Time : 20 min | Cook Time : 30 min"
    Serving="Serves: 4 people"
    difficult="Difficulty: Hard"
    type="Type: Dinner"
    Src="https://tse2.mm.bing.net/th/id/OIP.1AIg84BkjTxgSdUPp-rXgwHaHa?pid=Api&P=0&h=220"
    ChefName="Sathvik"/>
    <RecipeCard 
    RecipeName="Coffee Ice Cream	" 
    Time="Prep Time : 10 min | Cook Time : 20 min"
    Serving="Serves: 4 people"
    difficult="Difficulty: Easy"
    type="Type: Dessert"
    Src="https://tse2.mm.bing.net/th/id/OIP.bfWcnyIANAUHpL8euWbNzgHaHa?pid=Api&P=0&h=220"
    ChefName="Siddarth"/>

  </div>
  </>
)
