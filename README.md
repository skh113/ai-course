# Sentiment Analysis with Explainability

This project is a simple **NLP sentiment analysis** model that classifies sentences as **positive** or **negative**. Additionally, it provides explainability using **LIME** to highlight the words that influenced the prediction.

## Dataset

We use the **IMDB Sentiment Analysis Dataset**, which can be downloaded from: [IMDB Sentiment Dataset](https://www.kaggle.com/datasets/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews)

Ensure that you have the CSV file (`IMDB_Dataset.csv`) in the project directory before running the script.

## Installation

Make sure you have Python installed, then install the required dependencies:

```bash
pip install numpy pandas scikit-learn lime
```

## How to Run

1. Download the dataset and place it in the project directory.
2. Run the script to train the model and make predictions:

```bash
python sentiment_analysis.py
```

## Features

- **Preprocessing:** Cleans text (lowercasing, removing special characters).
- **Model Training:** Uses **Naïve Bayes** with **TF-IDF**.
- **Sentiment Classification:** Predicts whether a given sentence is positive or negative.
- **Explainability with LIME:** Highlights the words that influenced the model's decision.

## Example Usage

After running the script, you can input any sentence to get its sentiment and see which words contributed to the prediction:

```python
example_text = "I absolutely love this movie!"
print("Prediction:", model.predict([example_text])[0])
explain_prediction(example_text)
```

## Results

The model prints accuracy and classification reports. Example output:

```
Accuracy: 0.8651
              precision    recall  f1-score   support

           0       0.84      0.89      0.87      4961
           1       0.89      0.84      0.86      5039

    accuracy                           0.87     10000
   macro avg       0.87      0.87      0.87     10000
weighted avg       0.87      0.87      0.87     10000


```

## License

This project is open-source and free to use for educational purposes.

