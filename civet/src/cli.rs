use clap::{arg, Command};

pub (crate) fn cli() -> Command {

    Command::new("civet")
        .about("An extreamly secure chatting command line application.")
        .subcommand_required(true)
        .arg_required_else_help(true)
        .allow_external_subcommands(true)
        .subcommand(
            Command::new("join")
                .short_flag('j')
                .about("join a channel")
                .arg(arg!(<CHANNEL> "The channel to join"))
                .arg_required_else_help(true),
        )
        .subcommand(
            Command::new("start")
                .short_flag('s')
                .about("start a new channel")
                .arg(arg!(<CHANNEL> "The address on which to start."))
                .arg_required_else_help(true),
        )
        .subcommand(
            Command::new("list")
                .short_flag('l')
                .about("list all free channels")
        )
}