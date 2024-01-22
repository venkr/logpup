# Logpup

Logpup is lightweight instrumentation for personal projects and apps with 1-1000 users. It's a simple way for you to get realtime updates on important events in Discord.

Specifically: Logpup is a single .ts file that you can pull into your project `utils`, and submit some instrumentation to Discord.

(TODO: Make this a NPM package)

## Usage

- Create a Discord webhook for your channel
- Configure `logpup.ts` with your webhook URL
- Call `logpup.channel.send()` whenever you have a message worth triggering

## Recommended use-cases

This is mostly recommended for the super early days - you've just launched, and are curious about how people are using your app, or you have a personal project and you want to be notified if cron fails.

(TODO: Swap these for more real examples w/ some images?)

- User sign up / actions
  - Get a notification whenever someone uses the app for the first time, or does something important
  - You can also just send a notification on pageview in the early days :)
- Errors
  - Get a notification whenever an error is thrown. For some apps you might want to immediately follow up with your user, esp in the early days.
- Cronjobs
  - Get a notification whenever any recurring task runs, with its status
- Stripe notifications
  - Get a notification whenever a new user signs up
- VIP tracking
  - Get a notification whenever a VIP user takes an action

## Alternatives & growing out

- This is not a proper "logging" solution - you likely want to pipe detailed logs and longer error traces elsewhere. Perhaps `r2` by default.
- At some scale, you likely want to switch to Sentry or Amplitude or Datadog.
- A lot of these providers have nice Slack integrations, but this prefers Discord since early stage / personal projects are likelier to be using Discord.

## API

This is just a rather thin wrapper around Discord's webhook API, so you should consider just modifying `logpup.ts` to suit your needs. Take a look at [https://discohook.org/](https://discohook.org/) for a nice UI to play around with the schema.

(TODO: Add screenshots + code examples)
