#!/bin/bash
init_rust_program() {
    echo "Do you want to initialize a rust program?"
    read rust_answer
    if [[ "$rust_answer" ]]; then
        mkdir rust-program
        cd rust-program
        touch main.rs
        touch run.sh && chmod +x run.sh
        echo "\
#!/bin/bash
rustc main.rs && ./main
">>run.sh
        touch note.md
        echo "\
|notions|
|-------|
|enumaration|
|mutability|
|use|
|prelude|
" >>note.md
    fi
}

init_rust_program
