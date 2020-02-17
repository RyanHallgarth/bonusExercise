var tweets = [
  {
    text:"Doggo ipsum you are doin me a concern adorable doggo heckin good boys yapper shibe much ruin diet porgo woofer, pupperino yapper pupper very good spot shibe. Borkdrive fluffer floofs wow very biscit borking doggo doing me a frighten, aqua doggo heckin angery woofer blop. Heckin adorable doggo many pats shooberino puggorino, you are doing me a frighten heckin good boys. Blop shibe heck fat boi boof I am bekom fat, tungg very hand that feed shibe heckin good boys aqua doggo. Ruff corgo long bois borkf long bois, what a nice floof very hand that feed shibe. Aqua doggo thicc ur givin me a spook very good spot yapper, shooberino heck. H*ck dat tungg tho long bois ruff, clouds pupperino, many pats h*ck.",
    likes:50,
    comments:10000,
    retweets:20,
    image:false,
    username:"snuffy"
  },
   {
    text:"Doggo ipsum you are doin me a concern adorable doggo heckin good boys yapper shibe much ruin diet porgo woofer, pupperino yapper pupper very good spot shibe. Borkdrive fluffer floofs wow very biscit borking doggo doing me a frighten, aqua doggo heckin angery woofer blop. Heckin adorable doggo many pats shooberino puggorino, you are doing me a frighten heckin good boys. Blop shibe heck fat boi boof I am bekom fat, tungg very hand that feed shibe heckin good boys aqua doggo. Ruff corgo long bois borkf long bois, what a nice floof very hand that feed shibe. Aqua doggo thicc ur givin me a spook very good spot yapper, shooberino heck. H*ck dat tungg tho long bois ruff, clouds pupperino, many pats h*ck.",
    likes:10,
    comments:10000,
    retweets:20,
    image:true,
    username:"Huffy"
  },
   {
    text:"Doggo ipsum you are doin me a concern adorable doggo heckin good boys yapper shibe much ruin diet porgo woofer, pupperino yapper pupper very good spot shibe. Borkdrive fluffer floofs wow very biscit borking doggo doing me a frighten, aqua doggo heckin angery woofer blop. Heckin adorable doggo many pats shooberino puggorino, you are doing me a frighten heckin good boys. Blop shibe heck fat boi boof I am bekom fat, tungg very hand that feed shibe heckin good boys aqua doggo. Ruff corgo long bois borkf long bois, what a nice floof very hand that feed shibe. Aqua doggo thicc ur givin me a spook very good spot yapper, shooberino heck. H*ck dat tungg tho long bois ruff, clouds pupperino, many pats h*ck.",
    likes:25,
    comments:10,
    retweets:5,
    image:false,
    username:"Y33T"
  },
   {
    text:"Doggo ipsum you are doin me a concern adorable doggo heckin good boys yapper shibe much ruin diet porgo woofer, pupperino yapper pupper very good spot shibe. Borkdrive fluffer floofs wow very biscit borking doggo doing me a frighten, aqua doggo heckin angery woofer blop. Heckin adorable doggo many pats shooberino puggorino, you are doing me a frighten heckin good boys. Blop shibe heck fat boi boof I am bekom fat, tungg very hand that feed shibe heckin good boys aqua doggo. Ruff corgo long bois borkf long bois, what a nice floof very hand that feed shibe. Aqua doggo thicc ur givin me a spook very good spot yapper, shooberino heck. H*ck dat tungg tho long bois ruff, clouds pupperino, many pats h*ck.",
    likes:90,
    comments:10000,
    retweets:20,
    image:false,
    username:"Salty"
  },
   {
    text:"Doggo ipsum you are doin me a concern adorable doggo heckin good boys yapper shibe much ruin diet porgo woofer, pupperino yapper pupper very good spot shibe. Borkdrive fluffer floofs wow very biscit borking doggo doing me a frighten, aqua doggo heckin angery woofer blop. Heckin adorable doggo many pats shooberino puggorino, you are doing me a frighten heckin good boys. Blop shibe heck fat boi boof I am bekom fat, tungg very hand that feed shibe heckin good boys aqua doggo. Ruff corgo long bois borkf long bois, what a nice floof very hand that feed shibe. Aqua doggo thicc ur givin me a spook very good spot yapper, shooberino heck. H*ck dat tungg tho long bois ruff, clouds pupperino, many pats h*ck.",
    likes:50,
    comments:10000,
    retweets:20,
    image:true,
    username:"Giffy"
  },

]

var tweetEles=[];

function tweet(twt){
  var that = this;
  this.retweets=twt.retweets;
  this.comments=twt.comments;
  this.likes=twt.likes;
  this.ele=document.createElement("div");
  this.ele.classList.add("tweet");
  this.usernameEle=document.createElement("div");
  this.textEle=document.createElement("div");
  this.retweetsEle=document.createElement("div");
  this.commentsEle=document.createElement("div");
  this.imageEle=document.createElement("div");
  this.likesEle=document.createElement("div");
  
  this.usernameEle.innerHTML=twt.username;
   this.textEle.innerHTML=twt.text;
   this.retweetsEle.innerHTML="Retweets: "+this.retweets;
   this.likesEle.innerHTML="Likes: "+this.likes;
   this.commentsEle.innerHTML="Comments: "+this.comments;
  
  this.imageEle.innerHTML="<img src = 'https://media.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif'/>"
  
  this.retweetsEle.addEventListener("click", function(){
    that.retweets=that.retweets+1;
    that.retweetsEle.innerHTML="Retweets: "+that.retweets;
  })
  
    this.commentsEle.addEventListener("click", function(){
    that.comments=that.comments+1;
    that.commentsEle.innerHTML="Comments: "+that.comments;
  })
  
    this.likesEle.addEventListener("click", function(){
    that.likes=that.likes+1;
    that.likesEle.innerHTML="Likes: "+that.likes;
      if(that.likes>=100){
        that.ele.style.backgroundColor="red";
        that.ele.style.color="white";
      }
  })
  
  this.ele.appendChild(this.usernameEle);
   this.ele.appendChild(this.textEle);
   this.ele.appendChild(this.retweetsEle);
   this.ele.appendChild(this.commentsEle);
  this.ele.appendChild(this.likesEle);
  if(twt.image){
     this.ele.appendChild(this.imageEle);
     };
   
 
  
  document.body.appendChild(this.ele);
}

for(var i=0; i<tweets.length; i++){
  tweetEles.push(new tweet(tweets[i]))
  
  
}