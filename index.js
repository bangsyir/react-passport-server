const cookieSession = require("cookie-session")
const express = require("express")
const passport = require("passport")
const passportSetup = require("./passport")
const cors = require("cors")
const authRoute = require("./routes/auth")
const app = express()
// console.log(process.env)
app.use(cookieSession({
  name:"session",
  keys:["lama"],
  maxAge: 60 * 60 * 24 * 100
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
  origin: "http://localhost:3000",
  methods:"GET,POST,PUT,DELETE",
  credentials: true
}))

app.use("/auth", authRoute)

app.listen("8000", () => {
  console.log("server is running")
})