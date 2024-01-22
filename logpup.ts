class ChannelConfig {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  /**
   * Send a message to the channel - uses fetch API
   * @param message Message to send
   */
  async send(message: DiscordMessage) {
    return fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }
}

// TODO: Put your own webhook URLs here
export const logpup: LogpupConfig = {
  channel: new ChannelConfig("PUT_YOUR_WEBHOOK_URL_HERE"),
};

interface LogpupConfig {
  [key: string]: ChannelConfig;
}

/**
 * Message to send - requires either content or embeds
 */
interface DiscordMessage {
  content?: string;
  embeds?: RichEmbed[];
}

interface RichEmbed {
  title?: string;
  description?: string;
  url?: string;
  color?: number;
  fields: EmbedField[];
  author?: EmbedAuthor;
  image?: EmbedImage;
  thumbnail?: EmbedImage;
}

interface EmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

interface EmbedAuthor {
  name: string;
  url?: string;
  icon_url?: string;
}

interface EmbedImage {
  url: string;
}

// Takes a hex string, and parses it as an int
export function hexToInt(hex: string) {
  // if there's a leading #, remove it
  if (hex.slice(0, 1) === "#") {
    hex = hex.slice(1);
  }

  // if length is not 6, throw error
  if (hex.length !== 6) {
    throw new Error("Invalid hex string, expected of format #rrggbb");
  }

  return parseInt(hex, 16);
}
