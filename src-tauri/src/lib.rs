mod dir;
mod file;
mod utils;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("hello, {}! you've been greeted from rust!", name)
}

#[tauri::command]
fn start_conversion(path: &str) -> Vec<file::InputFile> {
    let path = std::path::PathBuf::from(path);
    let files = dir::collect_files(&path).unwrap();
    println!("{files:?}");

    files
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            start_conversion,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
