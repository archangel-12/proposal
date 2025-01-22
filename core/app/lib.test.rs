// use napi::bindgen_prelude::*;
// use serde::{Deserialize, Serialize};
// 
// #[derive(Serialize, Deserialize)]
// struct User {
//     name: String,
//     age: u32,
// }
// 
// 
// #[napi]
// pub fn parse_users(json_data: String) -> Result<Vec<User>> {
//     let users: Vec<User> = serde_json::from_str(&json_data)
//         .map_err(|e| Error::new(Status::InvalidArg, format!("Failed to parse JSON: {}", e)))?;
//     Ok(users)
// }