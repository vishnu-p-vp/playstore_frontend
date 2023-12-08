import { App } from "./_model/app.model";

export class Favourites{
    
    apps!: App;
    // = [
    //   {
    //     appId: 23,
    //   appName: "Temple Run",
    // appDescription: "Run for your life!",
    // releaseDate: "2023-11-14",
    // categoryName: "Games",
    // appVisibility: true,
    // appImageUrl: "https://activatedapp.com/wp-content/uploads/2020/01/d4c7425793a2bb4183f655609ceb93e3.png"
    //   }
    // ];
    // constructor() { }
  
    


    getFavourites(){
      return this.apps;
      // console.log(this.apps);
    }

    setFavourites(app:App)
    {
        // console.log(app);
        // this.apps.push(app);
        // console.log(this.apps);
        this.apps=app;
    }
}