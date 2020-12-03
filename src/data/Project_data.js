import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Project_data =[ 
    {
        id : '1',
        title : 'Tweet sentiment predictor',
        category : 'NLP',
        technology_used : 'Python 3, Keras, pandas, Scikit Learn',
        description : 'Performed data cleanup, tokenization and text feature extraction using TF-IDF.\
        Rectified the imbalanced dataset using SMOTE and compared the inference metrics of the trained models\
        including RNN to determine the best model for sentiment predictions.',
        image : project1
    },
   
    {
        id : '2',
        title : 'Exploratory data analysis',
        category : 'Data Science',
        technology_used : 'Python 3, Scikit Learn, Matplotlib, Jupyter notebook',
        description : 'Performed data wrangling and feature engineering of the dataset, hyperparameter tuning of the model.\
        Tested and compared different models to determine the best performing model.',
        image : project2
    },
    
    {
        id : '3',
        title : 'Web Application',
        category : 'Web Development',
        technology_used : 'Python 3, Flask, CSS3, HTML5, JavaScript, Apache2',
        description : 'Created a web application using Flask framework and implemented CRUD functionality and 3 rd\
        party authentication option using Google sign-in.\
        Hosted on a Linux AWS Lightsail instance and performed basic server hardening.',
        image : project3
    },
    {
        id : '4',
        title : 'Tweet sentiment predictor',
        category : 'NLP',
        technology_used : 'Python 3, Keras, pandas, Scikit Learn',
        description : 'Performed data cleanup, tokenization and text feature extraction using TF-IDF.\
        Rectified the imbalanced dataset using SMOTE and compared the inference metrics of the trained models\
        including RNN to determine the best model for sentiment predictions.',
        image : project1
    },
   
    {
        id : '5',
        title : 'Exploratory data analysis',
        category : 'Data Science',
        technology_used : 'Python 3, Scikit Learn, Matplotlib, Jupyter notebook',
        description : 'Performed data wrangling and feature engineering of the dataset, hyperparameter tuning of the model.\
        Tested and compared different models to determine the best performing model.',
        image : project2
    },
    
    {
        id : '6',
        title : 'Web Application',
        category : 'Web Development',
        technology_used : 'Python 3, Flask, CSS3, HTML5, JavaScript, Apache2',
        description : 'Created a web application using Flask framework and implemented CRUD functionality and 3 rd\
        party authentication option using Google sign-in.\
        Hosted on a Linux AWS Lightsail instance and performed basic server hardening.',
        image : project3
    }
]

export default Project_data;