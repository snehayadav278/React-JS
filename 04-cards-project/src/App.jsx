import {Bookmark} from 'lucide-react'
import Card from './components/Card'
import User from './components/User'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Software Engineer III",
    tag1: "Full-time",
    tag2: "Mid-Senior level",
    pay: "$148/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2014/01/02/23/30/microsoft-237843_640.png",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Backend Development",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$155/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Data Scientist",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$138/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Software Engineer, Backend",
    tag1: "Full-time",
    tag2: "Mid-Senior level",
    pay: "$150/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    datePosted: "4 days ago",
    post: "Database Administrator",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "$140/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Senior Software Engineer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$160/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/10/1/nvidia-logo-png_seeklogo-101614.png",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "Deep Learning Software Engineer",
    tag1: "Full-time",
    tag2: "Mid-Senior level",
    pay: "$148/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/25/1/salesforce-logo-png_seeklogo-256541.png",
    companyName: "Salesforce",
    datePosted: "2 weeks ago",
    post: "Software Engineer, Platform",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$142/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://fabrikbrands.com/wp-content/uploads/Adobe-Logo-History-6.png",
    companyName: "Adobe",
    datePosted: "5 weeks ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "$135/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Logo_oracle.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    companyName: "Oracle",
    datePosted: "10 weeks ago",
    post: "Cloud Software Engineer",
    tag1: "Full-time",
    tag2: "Mid-Senior level",
    pay: "$140/hour",
    location: "Bengaluru, India"
  }
];
console.log(jobOpenings);


  return (
    <div className="parent">
      {jobOpenings.map(function(elem){
        return <Card company={elem.companyName} 
        post={elem.post}
        logo = {elem.brandLogo}
        date = {elem.datePosted}
        tag1 = {elem.tag1}
        tag2 = {elem.tag2}
        pay = {elem.pay}
        location = {elem.location}
        />
      })}
    </div>
  )
}

export default App;