import google

print("Google module:", google)
print("Google file:", getattr(google, "__file__", None))
print("Google path:", getattr(google, "__path__", None))