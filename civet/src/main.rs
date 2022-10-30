use clap::{arg, Command};
mod cli;

fn main() {
    let matches = cli::cli().get_matches();

    match matches.subcommand() {
        Some(("join", sub_matches)) => {
            println!(
                "Joining {}",
                sub_matches.get_one::<String>("CHANNEL").expect("required")
            );
        }
        Some(("start", sub_matches)) => {
            println!(
                "Starting on {}",
                sub_matches.get_one::<String>("CHANNEL").expect("required")
            );
        }
        Some(("list", _sub_matches)) => {
            println!(
                "Channels are :",
            );
        }
        _ => unreachable!(), 
    }
}
