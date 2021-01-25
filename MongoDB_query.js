//1: Which city in Arizona has the highest average review count for it's local business?
db.business.aggregate({$match: {"state":"CA"}},
                       {$project:{"state":true,"city":true,"review_count":true, "_id":false}},
                       {$group:{_id: "$city", "avg_review_count":{$avg: "$review_count"}}},
                       {$sort:{"avg_review_count":-1}},
                       {$project:{"city":"$_id","avg_review_count":true, "_id":false}})
                       

 

//2 :Which business has the most check-in count (most popular)? 
db.checkin.aggregate({$project:{"business_id":true, "date":{$split:["$date",","]}, "_id":false}},
                       {$unwind:"$date"},
                       {$group:{_id:"$business_id",check_in_count: {$sum:1}}},
                       {$sort:{"check_in_count":-1}},
                       {$project:{"business_id":"$_id", "check_in_count":true, "_id":false}})
                       
// busienss with most check_in_count: FaHADZARwnY4yvlvpnsfGA


db.business.find({"business_id": "FaHADZARwnY4yvlvpnsfGA"},
                  {"name": true, "city":true, "categories": true, "_id":false})   
                  
                 
                       
                       
              

