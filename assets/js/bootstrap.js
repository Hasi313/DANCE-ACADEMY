@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
*{
   font-family: 'Rubik', sans-serif;
   margin:0; 
   padding:0;
   box-sizing: border-box;
   outline: none; 
   border:none;
}
.category_name span{ 
    font-size: 10px !important;
    font-family: 'Roboto', sans-serif;
}
.container{
	width: 100% !important;
}
.panel{
	margin-top: 30px;
}
.navbar-default{
	border-radius: 0px;
	margin-bottom: 0px;
	background-color: #922bc0 !important;
}
.navbar-brand{
	color: #FFF !important;
	font-size: 22px !important;
    font-weight: bold !important;
}
.nav li a{
	color: #FFF !important;
}
.dropdown-menu{
	background-color: #922bc0 !important;
}
.nav .open > a, .nav .open > a:focus {
background-color: #922bc0 !important;
}
.dropdown-menu li a:hover{
	color: #000 !important;
}
.panel-heading{
	background-color: #25316D !important;
	color: #FFF !important;
}
.primary-btn{
	background: #97D2EC;
	color: #FFF;
}
.primary-btn:hover{
	color: #FFF !important;
}

.success-btn{
	background: #5565b0;
  text-decoration: none !important;
	color: #FFF;
  padding:10px 90px !important;
  margin:10px 0px;
}
.success-btn:hover{
	color: #FFF !important;
}

.info-btn{
	background: #6E85B7;
	color: #FFF;
    padding: 9px 15px;
    text-decoration: none !important;
}
.info-btn:hover{
	color: #FFF !important;
}
.info-btn:focus{
  color: #FFF !important;
}

.warning-btn{
	background: #FFEE63;
	color: #FFF;
}
.warning-btn:hover{
	color: #FFF !important;
}

.danger-btn{
	background: #FA1E0E;
	color: #FFF;
}
.danger-btn:hover{
	color: #FFF !important;
}

.message{
   border: 1px solid #25316D;
    padding: 5px;
    margin-bottom: 10px;

}

.message span{
   font-size: 18px;
}

.message i{
   cursor: pointer !important;
   font-size: 18px;
   float: right !important;
   margin-top: 4px;
}

.footer{
   background-color: #922bc0;
   border-color: #FFF;
   width: 100%;
}
.footer p{
   padding: 8px;color: #FFF;text-align: center;margin-top:20px;
}

/*Navigation Bar*/
.sidebar-list{
  //margin-top:10px !important;
}

.sidebar-list a span{
   width: 40px;

}
.active {
    background-color: #9c69df !important;
    color: #FFF !important;
}
a.nav-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    border: 1px solid rgba(0,0,0,.125);
    background-color: #922bc0;
    color: #e7e7e7;
    font-weight: 350;
}
a.nav-item span{
  text-transform: uppercase !important;
}
a.nav-item:hover{
   color: #FFF;
   text-decoration: none;
   background-color: #9c69df;
}
.message{
      border: 1px solid #343434;
    margin: 15px;
    padding: 5px;
    font-size: 15px;
}

/*Admin dashboard right side*/
.instructors, .students, .enrolled, .dance_forms{
	width: 25%;
	padding: 25px 15px;
	border: 1px solid #ccc;
  text-align: center;
	margin-right: 10px;
}
.instructors{
  background: #FA7070;
}
.students{
	background: #d9c67b;
}
.enrolled{
  background: #b1e7af;

}
.dance_forms{
  background: #A1C298;
}
.admin span{
	font-size: 16px;
  font-weight: bold;
}
.admin i{
  display: block;font-size: 40px;color: #FFF;margin-bottom: 16px;
}

/*Admin category box*/
.category-box{
  margin-top: 10px;
    padding: 30px 0px 15px 0px;
    background-color: #fff;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    /* border: var(--border); */
    text-align: center;
    border: 1px solid #8e8484;
    border-top: 4px solid #c09a2b;
    border-bottom: 4px solid #922bc0;
}

.category-box span{
  margin: 10px 0px;
  font-size: 16px;
}


.category_name{
  text-align: center;padding: 3px 0px 13px 0px;color: #000;margin: 20px 0px 0px 0px;
}
.category_name span{
  font-weight: bold;
  color:#353131;
      
}

.trend{
      position: absolute;
    top: 17px;
    left: 10px;
    border-radius: 0.5rem;
    padding: 4px 10px;
    font-size: 14px;
    color: #FFF;
    background-color: #c09a2b;
}

/*To resize image size on category update*/
#category_image img{
  width: 15%;
  margin-bottom: 10px;
}
#dance_image img{
  width: 15%;
  margin-bottom: 10px;
}

.box{
  background: #f9f9f9;
    padding: 10px 0px;
    margin-top: 10px;
    border:1px solid #ccc;
}

/*To display skills on instrcutors dashboard*/
.skills li{
  padding: 6px 5px;
}

.skills input{
      font-size: 11px;
    padding: 9px 15px;
    background: #c6c1c8;
    color: #343434;
    font-weight: bold;
    border-radius: 5px;
    text-decoration: none;
}

.skills i{
  cursor: pointer;
  margin-left: 10px;
  font-size: 16px;
}

#skill{
  margin-top: 10px;width: 100%;border-radius: unset;display: none;
}

/*Menubar*/
.navbar-brand{
  margin-left: 10px !important;
}
.navbar-header{
  width: 80%;
}
.menubar{
  display: inline-block;
  margin-top: 15px;
  float: right;
}
.menubar li{
  list-style-type: none;
  display: inline-block;
  margin-top: 2px;
}

.menubar li a{
  color: #FFF;
  text-decoration: none;
  font-size: 14px;
    padding: 10px;
}
.menubar li a:hover{
  border-bottom:2px solid #ccc;
}

.carousel-inner{
  width: 100% !important;
}

.wrapper{
  width: 90%;
  margin: 0 auto;
}

.section{
  width: 90%;
  margin: 0 auto;
  display: flex;

}

.enrollBox{
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: -webkit-fill-available;
  padding: 15px;
}

#studentImage img{
  width: -webkit-fill-available;
}

.section p{
      font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 1.7;
    font-family: Lato, sans-serif;
    letter-spacing: 0px;
    color: #6b6a6a;
    text-align: justify;
}

@media (max-width:991px){
  .carousel-caption h3{
    font-size: 22px !important;
  }
  .carousel-caption p{
    font-size: 18px !important;
  }
  .slick-slide{
    width: 250px !important;
  }
}

@media (max-width:768px){
.navbar-brand{
    font-size: 20px !important;
    text-align: center;
  }
  .menubar li a{
    font-size: 13px;
  }
  .menubar li{
    margin: 0px;
  }
  .menubar li a{
    padding: 2px;
  }
  .carousel-caption h3{
    font-size: 17px !important;
  }
  .carousel-caption p{
    font-size: 14px !important;
  }
  .carousel-inner{
    min-height: 180px !important;
  }
  .slick-slide{
    width: 250px !important;
  }
  /*Admin Dashboard*/
  .instructors{
    width: 100% !important;
  }
  .students{
    width: 100% !important;
  }
  .enrolled{
    width: 100% !important;
  }
  .dance_forms{
    width: 100% !important;
  }
  .admin{
    display: block !important;
  }
  .actions{
    display: flex !important;
  }
  .actions a{
    margin-right: 2px !important;
  }
  .image img{
    width: 80% !important;
  }
}

@media(max-width:480px){
 /*Admin Dashboard*/
  .instructors{
    width: 100% !important;
  }
  /*Admin Dashboard*/
  .students{
    width: 100% !important;
  }
}