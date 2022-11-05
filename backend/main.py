from typing import Union
from fastapi import FastAPI
from web3 import Web3
from fastapi.middleware.cors import CORSMiddleware
from os import getenv
import openai

from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

app = FastAPI()

BSC_TESTNET_RPC_URL = "https://data-seed-prebsc-1-s1.binance.org:8545"
web3 = Web3(Web3.HTTPProvider(BSC_TESTNET_RPC_URL))

openai.api_key = getenv('OPENAI_API_KEY')

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/v1/wallet-balance/{wallet_address}")
async def root(wallet_address: str):
    amount = web3.eth.getBalance(wallet_address)
    if web3.isConnected():
        return {f"balance": web3.fromWei(amount,"ether")}
    else:
        return {"pekele"}


previous_tasks = ["Collecting data from different planets for research", "Helping to build new space stations", "Acting as a tour guide for space tourists"]
kk = ", ".join(previous_tasks)

@app.get("/api/v1/test")
async def gpt():

    response = openai.Completion.create(
        model="text-davinci-002",
        prompt=f"It's year 2222. Humans has moved to space and goverment is not existing anymore. Humans don't have jobs anymore since artifical intelligent has taken their jobs.\nWe need help to organize daily tasks for them to get salary out of the task.\n\nQ:Could you provide three tasks for humans to do in space for salary? The tasks should not be same as {kk}\n",
        temperature=0.37,
        max_tokens=418,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    
    return {"GPT-3": response.choices}