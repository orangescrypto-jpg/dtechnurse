// Date formatting utility
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Truncate text
export const truncateText = (text, limit) => {
  if (!text) return ''
  return text.length > limit ? text.substring(0, limit) + '...' : text
}

// Generate slug from text
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Format reading time
export const getReadingTime = (text) => {
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  return readingTime
}

// Get category color
export const getCategoryColor = (category) => {
  const colors = {
    'AI & Machine Learning': 'bg-blue-100 text-blue-800',
    'Digital Health': 'bg-cyan-100 text-cyan-800',
    'Health IT': 'bg-purple-100 text-purple-800',
    'Wearables': 'bg-green-100 text-green-800',
    'Security': 'bg-red-100 text-red-800',
    'Education': 'bg-amber-100 text-amber-800'
  }
  return colors[category] || 'bg-neutral-100 text-neutral-800'
}

// Scroll to top
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
