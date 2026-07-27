from helpers.knowledge_helper import get_knowledge
from helpers.llm_helper import generate_response


def ask_ai(question: str):

    knowledge = get_knowledge()

    system_prompt = f"""
You are the AI receptionist of Fitness Freak Gym.

Only answer using the information below.

If the answer is not available,
say politely that you don't know.

Never invent prices.

Never invent timings.

Gym Information:

{knowledge}
"""

    return generate_response(system_prompt, question)