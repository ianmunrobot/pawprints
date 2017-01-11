const mustBeLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('You must be logged in')
  }
  next()
}

const mustBeAdmin = (req, res, next) => {
  if (!(req.user && req.user.isAdmin)) {
    return res.status(401).send('You must be an admin to complete that action')
  }
  next()
}

const selfOnly = action => (req, res, next) => {
  if (req.params.id !== req.user.id) {
    return res.status(401).send(`You can only ${action} yourself.`)
  }
  next()
}

const selfOrAdmin = action => (req, res, next) => {
  if (!req.user || ((req.params.id !== req.user.id) && !req.user.isAdmin)) {
    return res.status(401).send(`You can only ${action} yourself, unless you are an admin.`)
  }
  next()
}

const forbidden = message => (req, res, next) => {
  res.status(403).send(message)
}

module.exports = {
  mustBeLoggedIn,
  selfOnly,
  forbidden,
  mustBeAdmin,
  selfOrAdmin
}
