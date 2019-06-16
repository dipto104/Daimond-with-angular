var app = angular.module("demo", []);
		app.controller("testCtrl", function($scope) {
		   $scope.temp = "";
		   $scope.rows = []; // init empty array
		   
		   $scope.printStars = function() {
			  var n = $scope.givenNumber;
			  $scope.rows = [];
			  
			  /*for(var i = n; i>=1; i--){
				var row = [];
				for(j = 1; j<=i; j++){
				  row.push(j);
				}
				$scope.rows.push(row);
			  }
			  for(var i = 1; i<=n; i++){
				var row = [];
				for(j = 1; j<=i; j++){
				  row.push(j);
				}
				$scope.rows.push(row);
			  }
			  
			  
			   $scope.rows2 = [];
			  
			  for(var i = n; i>=1; i--){
				var row = [];
				for(j = 1; j<=i; j++){
				  row.push(j);
				}
				$scope.rows2.push(row);
			  }
			  for(var i = 1; i<=n; i++){
				var row = [];
				for(j = 1; j<=i; j++){
				  row.push(j);
				}
				$scope.rows2.push(row);
			  }*/
			 /* if(n==5){
				  var c = document.getElementById("myCanvas");
					var ctx = c.getContext("2d");
					ctx.fillRect(100,100,100,100);
					
				}
			 else if(n==7){
					var c = document.getElementById("myCanvas");
					var ctx = c.getContext("2d");
					ctx.fillRect(300,300,100,100);
					ctx.clearRect(100, 100, 800, 600);
					
				}*/
				var c = document.getElementById("myCanvas");
				var ctx = c.getContext("2d");
				ctx.clearRect(0, 0, 1920, 1080);
				var subi=2,flag=0;
				 for(var i = 1; i<=2*n-1; i++){
				 	for(var j=1;j<=2*n-1;j++){
				 		if(i>1 && i<2*n-1){
				 			if(i<=n){
				 				var x=n-j;
					 			if(i-x==2){
					 				while(j<n){
					 					j++;
					 				}
					 				for(k=1;k<=x;k++){
					 				
					 					j++;
					 				}
					 				
					 			}
					 			else{
					 				ctx.fillRect(j*50,i*50,25,25);
					 			}
				 			}
				 			else if(i>n){
				 				flag=2;
				 				var x=n-j;
					 			if(i-x-subi==2){
					 				while(j<n){
					 					j++;
					 				}
					 				for(k=1;k<=x;k++){
					 					j++;
					 				}
					 				
					 			}
					 			else{
					 				ctx.fillRect(j*50,i*50,25,25);
					 			}
				 			}
				 			
				 			
				 		}
				 		else{
				 			ctx.fillRect(j*50,i*50,25,25);
				 		}
				 		

				 		
				 	}
				 	if(flag==2){
				 		subi=subi+2;
				 	}
				 	

				 }
				
			  
			
   }
		});
