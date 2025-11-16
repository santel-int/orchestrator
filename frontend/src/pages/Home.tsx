import Button from '../components/ui/Button'
import {
  Heart, Star, Download, Upload, Settings, Search, Bell, User, Mail, 
  Home as HomeIcon, Plus, Minus, X, Check, ArrowRight, ArrowLeft, ChevronDown,
  ChevronUp, Menu, MoreVertical, Edit, Trash, Save, Share, Copy,
  Play, Pause, Square, SkipForward, SkipBack, Volume2, VolumeX,
  Sun, Moon, Cloud, Zap, Lock, Unlock, Eye, EyeOff, Filter,
  Calendar, Clock, MapPin, Phone, Camera, Image, File, Folder,
  ShoppingCart, CreditCard, Gift, Tag, TrendingUp, BarChart,
  Grid, List, Layout, Maximize, Minimize, RefreshCw, RotateCw
} from 'lucide-react'

function Home() {
  const colors: Array<"gray" | "slate" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"> = [
    "gray", "slate", "zinc", "neutral", "stone", "red", "orange", 
    "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", 
    "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"
  ]

  return (
    <>
      <h1 className="text-4xl font-bold mb-2">Button Demo Gallery</h1>
      <p className="text-gray-600 mb-8">Explore over 100 button variations</p>

      {/* Primary Style - All Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Primary Style - All Colors</h2>
        <div className="flex flex-wrap gap-3">
          {colors.map(color => (
            <Button key={color} style="primary" color={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      {/* Secondary Style - All Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Secondary Style - All Colors</h2>
        <div className="flex flex-wrap gap-3">
          {colors.map(color => (
            <Button key={color} style="secondary" color={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      {/* Ghost Style - All Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Ghost Style - All Colors</h2>
        <div className="flex flex-wrap gap-3">
          {colors.map(color => (
            <Button key={color} style="ghost" color={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      {/* Outline Style - All Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Outline Style - All Colors</h2>
        <div className="flex flex-wrap gap-3">
          {colors.map(color => (
            <Button key={color} style="outline" color={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      {/* Icons Only */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Icons Only</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="blue"><Heart /></Button>
          <Button style="primary" color="red"><Star /></Button>
          <Button style="primary" color="green"><Download /></Button>
          <Button style="primary" color="purple"><Upload /></Button>
          <Button style="primary" color="orange"><Settings /></Button>
          <Button style="primary" color="cyan"><Search /></Button>
          <Button style="primary" color="pink"><Bell /></Button>
          <Button style="primary" color="indigo"><User /></Button>
          <Button style="secondary" color="blue"><Heart /></Button>
          <Button style="secondary" color="red"><Star /></Button>
          <Button style="ghost" color="blue"><Heart /></Button>
          <Button style="ghost" color="red"><Star /></Button>
          <Button style="outline" color="blue"><Heart /></Button>
          <Button style="outline" color="red"><Star /></Button>
        </div>
      </section>

      {/* Icons + Text */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Icons + Text</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="blue"><Download /> Download</Button>
          <Button style="primary" color="green"><Upload /> Upload</Button>
          <Button style="primary" color="purple"><Settings /> Settings</Button>
          <Button style="primary" color="orange"><Search /> Search</Button>
          <Button style="primary" color="red"><Heart /> Like</Button>
          <Button style="primary" color="amber"><Star /> Favorite</Button>
          <Button style="primary" color="teal"><Save /> Save</Button>
          <Button style="primary" color="pink"><Share /> Share</Button>
          <Button style="secondary" color="blue"><Download /> Download</Button>
          <Button style="secondary" color="green"><Upload /> Upload</Button>
          <Button style="ghost" color="blue"><Download /> Download</Button>
          <Button style="ghost" color="green"><Upload /> Upload</Button>
          <Button style="outline" color="blue"><Download /> Download</Button>
          <Button style="outline" color="green"><Upload /> Upload</Button>
        </div>
      </section>

      {/* Text Only - Different Styles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Text Only - Different Styles</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="blue">Click Me</Button>
          <Button style="primary" color="green">Submit</Button>
          <Button style="primary" color="red">Delete</Button>
          <Button style="primary" color="purple">Save Changes</Button>
          <Button style="secondary" color="blue">Cancel</Button>
          <Button style="secondary" color="gray">Reset</Button>
          <Button style="ghost" color="blue">Learn More</Button>
          <Button style="ghost" color="gray">Skip</Button>
          <Button style="outline" color="blue">Learn More</Button>
          <Button style="outline" color="gray">Skip</Button>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Action Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="green"><Check /> Confirm</Button>
          <Button style="primary" color="red"><X /> Cancel</Button>
          <Button style="primary" color="blue"><Save /> Save</Button>
          <Button style="primary" color="orange"><Edit /> Edit</Button>
          <Button style="primary" color="red"><Trash /> Delete</Button>
          <Button style="primary" color="purple"><Copy /> Copy</Button>
          <Button style="primary" color="teal"><Share /> Share</Button>
          <Button style="primary" color="indigo"><Download /> Download</Button>
          <Button style="outline" color="green"><Check /> Confirm</Button>
          <Button style="outline" color="red"><X /> Cancel</Button>
          <Button style="outline" color="blue"><Save /> Save</Button>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Navigation Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="blue"><ArrowLeft /> Previous</Button>
          <Button style="primary" color="blue">Next <ArrowRight /></Button>
          <Button style="ghost" color="gray"><ChevronUp /> Up</Button>
          <Button style="ghost" color="gray">Down <ChevronDown /></Button>
          <Button style="secondary" color="blue"><HomeIcon /> Home</Button>
          <Button style="secondary" color="purple"><Menu /> Menu</Button>
          <Button style="outline" color="blue"><ArrowLeft /> Previous</Button>
          <Button style="outline" color="blue">Next <ArrowRight /></Button>
        </div>
      </section>

      {/* Media Controls */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Media Controls</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="green"><Play /> Play</Button>
          <Button style="primary" color="orange"><Pause /> Pause</Button>
          <Button style="primary" color="red"><Square /> Stop</Button>
          <Button style="secondary" color="blue"><SkipBack /> Previous</Button>
          <Button style="secondary" color="blue">Next <SkipForward /></Button>
          <Button style="ghost" color="gray"><Volume2 /> Volume</Button>
          <Button style="ghost" color="gray"><VolumeX /> Mute</Button>
          <Button style="outline" color="green"><Play /> Play</Button>
          <Button style="outline" color="orange"><Pause /> Pause</Button>
        </div>
      </section>

      {/* Social & Communication */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Social & Communication</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="blue"><Mail /> Email</Button>
          <Button style="primary" color="green"><Phone /> Call</Button>
          <Button style="primary" color="purple"><User /> Profile</Button>
          <Button style="primary" color="pink"><Heart /> Like</Button>
          <Button style="secondary" color="red"><Bell /> Notifications</Button>
          <Button style="ghost" color="blue"><Share /> Share</Button>
          <Button style="outline" color="blue"><Mail /> Email</Button>
          <Button style="outline" color="green"><Phone /> Call</Button>
        </div>
      </section>

      {/* File & Data */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">File & Data</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="blue"><File /> File</Button>
          <Button style="primary" color="green"><Folder /> Folder</Button>
          <Button style="primary" color="purple"><Image /> Image</Button>
          <Button style="primary" color="orange"><Camera /> Camera</Button>
          <Button style="secondary" color="blue"><Download /> Download</Button>
          <Button style="secondary" color="green"><Upload /> Upload</Button>
          <Button style="ghost" color="gray"><Copy /> Copy</Button>
          <Button style="outline" color="blue"><File /> File</Button>
          <Button style="outline" color="green"><Folder /> Folder</Button>
        </div>
      </section>

      {/* UI Controls */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">UI Controls</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="gray"><Settings /> Settings</Button>
          <Button style="primary" color="blue"><Filter /> Filter</Button>
          <Button style="primary" color="purple"><Search /> Search</Button>
          <Button style="secondary" color="gray"><Grid /> Grid View</Button>
          <Button style="secondary" color="gray"><List /> List View</Button>
          <Button style="ghost" color="gray"><Layout /> Layout</Button>
          <Button style="ghost" color="blue"><RefreshCw /> Refresh</Button>
          <Button style="ghost" color="orange"><RotateCw /> Rotate</Button>
          <Button style="outline" color="gray"><Settings /> Settings</Button>
          <Button style="outline" color="blue"><Filter /> Filter</Button>
        </div>
      </section>

      {/* Status & Toggle */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Status & Toggle</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="green"><Lock /> Locked</Button>
          <Button style="primary" color="blue"><Unlock /> Unlocked</Button>
          <Button style="primary" color="gray"><Eye /> Visible</Button>
          <Button style="primary" color="gray"><EyeOff /> Hidden</Button>
          <Button style="secondary" color="yellow"><Sun /> Light Mode</Button>
          <Button style="secondary" color="indigo"><Moon /> Dark Mode</Button>
          <Button style="ghost" color="blue"><Zap /> Active</Button>
          <Button style="outline" color="green"><Lock /> Locked</Button>
          <Button style="outline" color="blue"><Unlock /> Unlocked</Button>
        </div>
      </section>

      {/* E-commerce */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">E-commerce</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="green"><ShoppingCart /> Add to Cart</Button>
          <Button style="primary" color="blue"><CreditCard /> Checkout</Button>
          <Button style="primary" color="purple"><Gift /> Gift</Button>
          <Button style="secondary" color="orange"><Tag /> Tag</Button>
          <Button style="ghost" color="green"><TrendingUp /> Trending</Button>
          <Button style="outline" color="green"><ShoppingCart /> Add to Cart</Button>
          <Button style="outline" color="blue"><CreditCard /> Checkout</Button>
        </div>
      </section>

      {/* Analytics & Charts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Analytics & Charts</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="blue"><BarChart /> Analytics</Button>
          <Button style="primary" color="green"><TrendingUp /> Growth</Button>
          <Button style="secondary" color="purple"><Calendar /> Calendar</Button>
          <Button style="ghost" color="gray"><Clock /> Time</Button>
          <Button style="outline" color="blue"><BarChart /> Analytics</Button>
          <Button style="outline" color="green"><TrendingUp /> Growth</Button>
        </div>
      </section>

      {/* Location & Weather */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Location & Weather</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="red"><MapPin /> Location</Button>
          <Button style="primary" color="yellow"><Sun /> Sunny</Button>
          <Button style="primary" color="gray"><Cloud /> Cloudy</Button>
          <Button style="secondary" color="amber"><Zap /> Lightning</Button>
          <Button style="outline" color="red"><MapPin /> Location</Button>
          <Button style="outline" color="yellow"><Sun /> Sunny</Button>
        </div>
      </section>

      {/* Mixed Combinations */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Mixed Combinations</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="blue"><Plus /> Add New</Button>
          <Button style="primary" color="red"><Minus /> Remove</Button>
          <Button style="secondary" color="green"><Check /> Approved</Button>
          <Button style="secondary" color="red"><X /> Rejected</Button>
          <Button style="ghost" color="blue"><MoreVertical /> More</Button>
          <Button style="ghost" color="gray"><Maximize /> Maximize</Button>
          <Button style="ghost" color="gray"><Minimize /> Minimize</Button>
          <Button style="outline" color="blue"><Plus /> Add New</Button>
          <Button style="outline" color="red"><Minus /> Remove</Button>
          <Button style="outline" color="green"><Check /> Approved</Button>
        </div>
      </section>

      {/* All Styles - Same Color */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">All Styles - Blue Color</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="blue"><Download /> Primary</Button>
          <Button style="secondary" color="blue"><Download /> Secondary</Button>
          <Button style="ghost" color="blue"><Download /> Ghost</Button>
          <Button style="outline" color="blue"><Download /> Outline</Button>
        </div>
      </section>

      {/* All Styles - Red Color */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">All Styles - Red Color</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="red"><Trash /> Primary</Button>
          <Button style="secondary" color="red"><Trash /> Secondary</Button>
          <Button style="ghost" color="red"><Trash /> Ghost</Button>
          <Button style="outline" color="red"><Trash /> Outline</Button>
        </div>
      </section>

      {/* All Styles - Green Color */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">All Styles - Green Color</h2>
        <div className="flex flex-wrap gap-3">
          <Button style="primary" color="green"><Check /> Primary</Button>
          <Button style="secondary" color="green"><Check /> Secondary</Button>
          <Button style="ghost" color="green"><Check /> Ghost</Button>
          <Button style="outline" color="green"><Check /> Outline</Button>
        </div>
      </section>
    </>
  )
}

export default Home
