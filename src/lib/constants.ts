import type { CommandCategory, Developer, FaqItem, Feature, NavLink, Stat, PremiumTier } from './types';
import {
  LucideIcon,
  Music,
  SlidersHorizontal,
  ListMusic,
  Settings,
  PartyPopper,
  Info,
  Radio,
  BarChart,
  Bot,
  CirclePlay,
  ClipboardList,
  Cpu,
  Disc3,
  Flame,
  Globe,
  HeartHandshake,
  HeartPulse,
  Layers,
  MessageSquareHeart,
  Sparkles,
  Users,
  Vote,
  Waypoints,
  Zap,
  ShieldCheck,
  Crown,
  Gem,
  CheckCircle2,
  Code,
} from 'lucide-react';

// Core Links
export const BOT_INVITE_LINK = "https://discord.com/oauth2/authorize?client_id=1281872745113587752&permissions=1165626332499793&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.gg%2FDqmJFqdWXy&integration_type=0&scope=bot+applications.commands+guilds.join";
export const SUPPORT_SERVER_LINK = "https://discord.gg/DqmJFqdWXy";
export const VOTE_LINK = "https://top.gg/bot/1281872745113587752/vote";

// Navigation
export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/commands', label: 'Commands' },
  { href: '/premium', label: 'Premium' },
  { href: '/developers', label: 'Developers' },
  { href: '/support', label: 'Support' },
];

// Home Page Stats
export const STATS: Stat[] = [
  { label: 'Total Servers', value: 900+, icon: Globe, suffix: '+' },
  { label: 'Total Users', value: 520000+, icon: Users, suffix: '+' },
  { label: 'Uptime', value: 99.9, icon: ShieldCheck, suffix: '%' },
  { label: 'Songs Played', value: 10000, icon: Music, suffix: '+' },
];

// Features
export const FEATURES: Feature[] = [
    {
        icon: Waypoints,
        title: 'Multi-Platform Streaming',
        description: 'Enjoy music from Spotify, YouTube, and SoundCloud without missing a beat. Funky Music seamlessly integrates with your favorite platforms.',
        benefit: 'Access a virtually unlimited library of songs from multiple sources in one place.'
    },
    {
        icon: Disc3,
        title: 'Premium Audio Quality',
        description: 'Experience crystal-clear, high-bitrate audio streaming that brings your music to life. Our volume normalization ensures a consistent and pleasant listening experience.',
        benefit: 'Feel the music as the artist intended with lossless quality and balanced sound.'
    },
    {
        icon: Layers,
        title: 'Advanced Audio Filters',
        description: 'Customize your sound with over 15 real-time audio effects. From 8D and bass boost to nightcore and karaoke, you can transform any track.',
        benefit: 'Set the perfect vibe for any occasion by applying professional-grade audio effects on the fly.'
    },
    {
        icon: ListMusic,
        title: 'Powerful Playlist Management',
        description: 'Create, save, and manage personal playlists directly within Discord. Import playlists from Spotify or export your custom Funky Music playlists to share with friends.',
        benefit: 'Your entire music library, curated by you, is always just a command away.'
    },
    {
        icon: Cpu,
        title: 'Guaranteed 24/7 Uptime',
        description: 'Funky Music boasts a 99.9% reliability guarantee. With auto-reconnect and persistent queues, the music never stops, even if you do.',
        benefit: 'Rely on a bot that’s always online and ready to play, ensuring your server’s party never ends unexpectedly.'
    },
    {
        icon: Bot,
        title: 'Smart Controls & DJ Roles',
        description: 'Take full control with intuitive features like autoplay, queue management, and song voting. Assign DJ roles to manage who controls the music.',
        benefit: 'Democratize your server’s music experience or maintain order with a flexible and powerful permission system.'
    },
    {
        icon: MessageSquareHeart,
        title: 'Fun Social Commands',
        description: 'Engage your community with over 16 interactive commands. From hugs and pats to roasts and bonks, Funky Music adds a new layer of fun to your server.',
        benefit: 'Strengthen community bonds and create memorable moments with a suite of expressive social commands.'
    },
    {
        icon: Sparkles,
        title: 'Exclusive Premium Features',
        description: 'Unlock the ultimate Funky Music experience with Premium. Get access to 24/7 mode, priority support, enhanced audio quality, and more.',
        benefit: 'Support the developers and gain access to powerful features that take your server to the next level.'
    }
];

// Commands
export const COMMAND_CATEGORIES: CommandCategory[] = [
    {
        name: 'Music',
        icon: Music,
        commands: [
            { name: '+autoplay', description: 'Toggles autoplay for the current queue.', usage: '+autoplay' },
            { name: '+clear', description: 'Clears the server music queue.', usage: '+clear' },
            { name: '+grab', description: 'Saves the current song to your DMs.', usage: '+grab' },
            { name: '+join', description: 'Makes the bot join your voice channel.', usage: '+join' },
            { name: '+leave', description: 'Makes the bot leave your voice channel.', usage: '+leave' },
            { name: '+loop', description: 'Changes the loop mode (track, queue, off).', usage: '+loop <track|queue|off>' },
            { name: '+nowplaying', description: 'Shows information about the current song.', usage: '+nowplaying' },
            { name: '+pause', description: 'Pauses the current song.', usage: '+pause' },
            { name: '+play', description: 'Plays a song from YouTube, Spotify, etc.', usage: '+play <song name or URL>' },
            { name: '+previous', description: 'Plays the previous song in the queue.', usage: '+previous' },
            { name: '+queue', description: 'Shows the current music queue.', usage: '+queue' },
            { name: '+radio', description: 'Starts a radio station based on the current song.', usage: '+radio' },
            { name: '+rejoin', description: 'Makes the bot rejoin your channel.', usage: '+rejoin' },
            { name: '+remove', description: 'Removes a song from the queue.', usage: '+remove <song number>' },
            { name: '+resume', description: 'Resumes the paused song.', usage: '+resume' },
            { name: '+search', description: 'Searches for a song and shows top results.', usage: '+search <song name>' },
            { name: '+seek', description: 'Seeks to a specific time in the song.', usage: '+seek <time>' },
            { name: '+shuffle', description: 'Shuffles the current queue.', usage: '+shuffle' },
            { name: '+similar', description: 'Adds similar songs to the queue.', usage: '+similar' },
            { name: '+skip', description: 'Skips the current song.', usage: '+skip' },
            { name: '+stop', description: 'Stops the music and clears the queue.', usage: '+stop' },
            { name: '+volume', description: 'Changes the music volume.', usage: '+volume <1-100>' },
        ],
    },
    {
        name: 'Filter',
        icon: SlidersHorizontal,
        commands: [
            { name: '+8d', description: 'Applies an 8D audio effect.', usage: '+8d' },
            { name: '+bassboost', description: 'Boosts the bass of the song.', usage: '+bassboost <level>' },
            { name: '+china', description: 'Applies a china audio effect.', usage: '+china' },
            { name: '+chipmunk', description: 'Applies a chipmunk audio effect.', usage: '+chipmunk' },
            { name: '+clearfilters', description: 'Clears all active audio filters.', usage: '+clearfilters' },
            { name: '+daycore', description: 'Applies a daycore audio effect.', usage: '+daycore' },
            { name: '+distortion', description: 'Applies a distortion audio effect.', usage: '+distortion' },
            { name: '+earrape', description: 'Applies an earrape audio effect.', usage: '+earrape' },
            { name: '+enhance', description: 'Enhances the audio quality.', usage: '+enhance' },
            { name: '+equalizer', description: 'Adjusts the audio equalizer.', usage: '+equalizer' },
            { name: '+karaoke', description: 'Applies a karaoke audio effect.', usage: '+karaoke' },
            { name: '+nightcore', description: 'Applies a nightcore audio effect.', usage: '+nightcore' },
            { name: '+optimize', description: 'Optimizes audio for your setup.', usage: '+optimize' },
            { name: '+pop', description: 'Applies a pop audio effect.', usage: '+pop' },
            { name: '+soft', description: 'Applies a soft audio effect.', usage: '+soft' },
        ],
    },
    {
        name: 'Playlist',
        icon: ListMusic,
        commands: [
            { name: '+pl-add', description: 'Adds a track to your playlist.', usage: '+pl-add <playlist name> <song>' },
            { name: '+pl-create', description: 'Creates a new playlist.', usage: '+pl-create <name>' },
            { name: '+pl-delete', description: 'Deletes one of your playlists.', usage: '+pl-delete <name>' },
            { name: '+pl-export', description: 'Exports a playlist to a file.', usage: '+pl-export <name>' },
            { name: '+pl-import', description: 'Imports a playlist from a file.', usage: '+pl-import' },
            { name: '+pl-info', description: 'Shows info about a playlist.', usage: '+pl-info <name>' },
            { name: '+pl-list', description: 'Lists all your playlists.', usage: '+pl-list' },
            { name: '+pl-load', description: 'Loads a playlist into the queue.', usage: '+pl-load <name>' },
            { name: '+pl-profile', description: 'Shows your playlist profile.', usage: '+pl-profile' },
            { name: '+pl-removetrack', description: 'Removes a track from a playlist.', usage: '+pl-removetrack <name> <track number>' },
        ],
    },
    {
        name: 'Config',
        icon: Settings,
        commands: [
            { name: '+247', description: 'Toggles 24/7 mode (premium).', usage: '+247' },
            { name: '+buy', description: 'Shows information on how to buy premium.', usage: '+buy' },
            { name: '+config', description: 'Shows the server configuration for the bot.', usage: '+config' },
            { name: '+ignore', description: 'Makes the bot ignore a channel.', usage: '+ignore <channel>' },
            { name: '+prefix', description: 'Changes the bot\'s prefix for the server.', usage: '+prefix <new prefix>' },
            { name: '+premium', description: 'Shows your premium status.', usage: '+premium' },
            { name: '+profile', description: 'Shows your Funky Music user profile.', usage: '+profile' },
            { name: '+redeem', description: 'Redeems a premium code.', usage: '+redeem <code>' },
        ],
    },
    {
        name: 'Fun',
        icon: PartyPopper,
        commands: [
            { name: '+adance', description: 'Anime dance!', usage: '+adance' },
            { name: '+blush', description: 'Blush at someone.', usage: '+blush' },
            { name: '+bonk', description: 'Bonk a user.', usage: '+bonk <@user>' },
            { name: '+catsay', description: 'Make the cat say something.', usage: '+catsay <text>' },
            { name: '+cry', description: 'Start crying.', usage: '+cry' },
            { name: '+cuddle', description: 'Cuddle a user.', usage: '+cuddle <@user>' },
            { name: '+hug', description: 'Hug a user.', usage: '+hug <@user>' },
            { name: '+kick', description: 'Kick a user (for fun).', usage: '+kick <@user>' },
            { name: '+kill', description: 'Kill a user (for fun).', usage: '+kill <@user>' },
            { name: '+kiss', description: 'Kiss a user.', usage: '+kiss <@user>' },
            { name: '+pat', description: 'Pat a user.', usage: '+pat <@user>' },
            { name: '+punch', description: 'Punch a user.', usage: '+punch <@user>' },
            { name: '+roast', description: 'Roast a user.', usage: '+roast <@user>' },
            { name: '+shoot', description: 'Shoot a user.', usage: '+shoot <@user>' },
            { name: '+slap', description: 'Slap a user.', usage: '+slap <@user>' },
            { name: '+wink', description: 'Wink at someone.', usage: '+wink' },
        ],
    },
    {
        name: 'Information',
        icon: Info,
        commands: [
            { name: '+help', description: 'Shows the help menu.', usage: '+help [command]' },
            { name: '+invite', description: 'Get the bot\'s invite link.', usage: '+invite' },
            { name: '+node', description: 'Shows the status of the music node.', usage: '+node' },
            { name: '+ping', description: 'Shows the bot\'s latency.', usage: '+ping' },
            { name: '+report', description: 'Report a bug or issue.', usage: '+report <message>' },
            { name: '+stats', description: 'Shows detailed bot statistics.', usage: '+stats' },
            { name: '+support', description: 'Get the link to the support server.', usage: '+support' },
            { name: '+uptime', description: 'Shows how long the bot has been online.', usage: '+uptime' },
            { name: '+vote', description: 'Get links to vote for the bot.', usage: '+vote' },
        ],
    },
    {
        name: 'Spotify',
        icon: Radio,
        commands: [
            { name: '+spotifylogin', description: 'Log in to your Spotify account.', usage: '+spotifylogin' },
            { name: '+unlinkspotify', description: 'Unlink your Spotify account.', usage: '+unlinkspotify' },
            { name: '+spotifyplaylists', description: 'View your Spotify playlists.', usage: '+spotifyplaylists' },
            { name: '+spotifyprofile', description: 'View your Spotify profile.', usage: '+spotifyprofile' },
        ]
    }
];

// Developers
export const DEVELOPERS: Developer[] = [
    {
        name: 'Knox',
        role: 'Owner & Lead Developer',
        discordUsername: 'knoxontopp',
        discordUserId: '1360105330130026496',
        avatarId: 'knox-avatar',
        bio: 'As the founder and lead developer, Knox architected Funky Music from the ground up. He oversees all development, ensuring the bot remains stable, scalable, and packed with cutting-edge features.'
    },
    {
        name: 'Deepjyoti',
        role: 'Co-Owner & Developer',
        discordUsername: 'deepjyoti.exe',
        discordUserId: '1064033717561081856',
        avatarId: 'deepjyoti-avatar',
        bio: 'Deepjyoti focuses on enhancing the user experience and developing new commands. His work on the playlist and filter systems has been crucial to making Funky Music a powerhouse of musical control.'
    }
];

// FAQs
export const FAQ_ITEMS: FaqItem[] = [
    {
        question: 'How do I add Funky Music to my Discord server?',
        answer: 'Simple! Just click on any "Add to Discord" or "Invite" button on this website. You will be prompted to select a server where you have "Manage Server" permissions. Authorize the bot, and it will join your server instantly.'
    },
    {
        question: 'What is the default prefix for Funky Music?',
        answer: 'The default prefix is `+`. You can use commands like `+play <song name>`. If you are an administrator, you can change the prefix for your server using the `+prefix <new prefix>` command.'
    },
    {
        question: 'Is Funky Music free to use?',
        answer: 'Yes, the vast majority of Funky Music\'s features are completely free! We offer an optional Premium subscription for users who want access to enhanced features like 24/7 mode, better audio quality, and more, which also helps support the bot\'s development and hosting costs.'
    },
    {
        question: 'The bot is in my channel but I can\'t hear any music. What should I do?',
        answer: 'First, check if the bot is muted (right-click the bot in the voice channel). Second, ensure your own output device in Discord is set correctly. Third, check the bot\'s volume with `+volume`. If you still have issues, try `+leave` and then `+join` to reset the connection. If the problem persists, please join our support server for help.'
    },
    {
        question: 'How can I get support if I find a bug or have a question?',
        answer: 'The best way to get help is by joining our official Support Server. We have a dedicated support team and community members who are happy to assist you. You can also use the `+report <message>` command to send a bug report directly to the developers.'
    }
];

// Vote Rewards
export const VOTE_REWARDS: { icon: LucideIcon, text: string }[] = [
    { icon: Sparkles, text: 'Unlock exclusive cosmetic features for your profile.' },
    { icon: Flame, text: 'Gain a "Supporter" role in our official Discord server.' },
    { icon: Zap, text: 'Get a temporary boost for certain commands.' },
    { icon: HeartPulse, text: 'Priority access to new beta features.' }
];

// Footer Links
export const FOOTER_LINKS = {
    'Pages': [
        { href: '/features', label: 'Features' },
        { href: '/commands', label: 'Commands' },
        { href: '/premium', label: 'Premium' },
    ],
    'Community': [
        { href: '/developers', label: 'Developers' },
        { href: VOTE_LINK, label: 'Vote' },
        { href: SUPPORT_SERVER_LINK, label: 'Discord' },
    ],
    'Legal': [
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/terms-of-service', label: 'Terms of Service' },
    ]
};

// Premium Tiers
export const PREMIUM_TIERS: PremiumTier[] = [
    {
        name: 'Free',
        price: '$0/month',
        description: 'The core Funky Music experience for everyone.',
        features: [
            'Standard Audio Quality',
            'All Music Commands',
            'Basic Audio Filters',
            'Community Support',
        ],
        isRecommended: false,
        buttonText: 'Current Plan',
        buttonVariant: 'outline',
    },
    {
        name: 'Premium',
        price: '$4.99/month',
        description: 'For serious music lovers and larger communities.',
        features: [
            'High-Quality Audio (256kbps)',
            '24/7 Music Playback',
            'All Audio Filters',
            'Volume Control up to 200%',
            'Persistent Queue',
            'Priority Support',
        ],
        isRecommended: true,
        buttonText: 'Upgrade to Premium',
        buttonVariant: 'default',
    },
    {
        name: 'Premium+',
        price: '$9.99/month',
        description: 'The ultimate experience for power users and multiple servers.',
        features: [
            'Lossless Audio Quality (320kbps+)',
            'Everything in Premium',
            'Premium on 3 Servers',
            'Custom Bot Branding (soon)',
            'Beta Feature Access',
            'Exclusive Supporter Role',
        ],
        isRecommended: false,
        buttonText: 'Get Premium+',
        buttonVariant: 'outline',
    },
];
    
