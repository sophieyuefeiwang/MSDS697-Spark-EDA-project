# MSDS697-Spark-EDA-project
Visualization with Apache Spark

The data pipeline for this project is: 
  1) Upload json files to AWS S3; 
  2) Load and query Data from AWS S3 into MongoDB Atlas with 2 shards and 3 replicas (distributed data system);
  3) Data processing and analysis using Apache Spark using AWS EMR service;
  4) EDA and visualization using matplotlib.
  
In this project, we explored query and computing efficiency from the following aspects:
  1) Ran the same query using pymongo (non-distributed computing setting) versus Spark (distributed computing setting). Spark reduced the runtime by 95%;
  2) In MongoDB, we added index on the dataset in order to run query faster;
  3) When using Spark, we reduced the runtime by 40% by persisting RDDs to memory/disk, using HashPartitioner to organize data for minimizing network traffic to improve computing performance;
  4) Chose a AWS EMR cluster with bigger memory when multiple group members need to access jupyter notebooks on EMR.
 
