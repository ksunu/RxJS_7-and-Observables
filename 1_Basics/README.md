# Subscription Lifecycle

- Obervable subscription
- Emitting different notifications and reacting by using various Observer handler functions
- Ending subscription when error or complete, or unsubscribe

# Teardown Logic

- Run so Observable can run cancellation or clean up after itself to avoid causing memory leaks or leaving dead code running
