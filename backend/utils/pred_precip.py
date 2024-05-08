import pandas as pd


def get_precip(state, district, month):
    df = pd.read_csv('data/district wise precip normal.csv')
    row = df[(df['STATE_UT_NAME'] == state) & (df['DISTRICT'] == district)]
    precip = row[month].values
    if precip.shape[0] == 0:
        raise Exception(
            f"Unable to match month:{month} with the state:{state} and district:{district}")
    return precip