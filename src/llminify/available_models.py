from langchain_anthropic import ChatAnthropic
from langchain_core.language_models.chat_models import BaseChatModel

DEFAULT_MODEL = "claude-sonnet"

AVAILABLE_MODELS = {
    "claude-sonnet": lambda: ChatAnthropic(
        model_name="claude-3-5-sonnet-20240620",
        timeout=None,
        stop=None,
        base_url=None,
        api_key=None,
    )
}


def get_model(model_name: str) -> BaseChatModel:
    if model_name in AVAILABLE_MODELS:
        return AVAILABLE_MODELS[model_name]()

    raise ValueError(f"Unsupported model: {model_name}")
