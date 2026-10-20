---
title: Linux Systems Engineering Roadmap
slug: roadmap
---

> *"Talk is cheap. Show me the code."* — **Linus Torvalds**

The **Linux Systems Engineering Roadmap** is a comprehensive, progressive learning curriculum designed to take engineers from their first terminal pipeline all the way to authoring loadable kernel modules, diagnosing low-level performance bottlenecks, and submitting upstream patches to the Linux Kernel Mailing List (LKML).

Inspired by Brian Ward's foundational guide *How Linux Works: What Every Superuser Should Know* and Robert Love's *Linux Kernel Development*, each tier builds directly upon the hardware, architectural, and operational concepts established in the previous tier.

---

## The 4 Progression Phases

The curriculum is structured across **four progressive phases** spanning **10 mastery tiers** and **11 comprehensive documentation modules**:

```
+-----------------------------------------------------------------------------------+
|  PHASE 1: Systems Foundations & Distro Ecosystem (Tiers 01 - 02 | Modules 01 - 03)|
|  Shell pipelines, POSIX standards, device nodes (/dev), systemd, LVM & networks   |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
|  PHASE 2: Hardware Isolation, Protection Rings & Boot (Tiers 03 - 04 | Mod 04 - 05)|
|  CPU Rings (Ring 0 vs 3), MMU paging, dynamic linking, initramfs & kernel compile|
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
|  PHASE 3: Core Subsystems, Schedulers & High-Speed I/O (Tiers 05 - 07 | Mod 06 - 08)|
|  VFS, Buddy/SLUB, EEVDF, Netfilter 5 hooks, signals, /proc/<PID> & io_uring       |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
|  PHASE 4: Containers, Observability & Kernel Dev (Tiers 08 - 10 | Modules 09 - 11)|
|  Namespaces & cgroups, Load Average triage, eBPF & Flame Graphs, Character Drivers|
+-----------------------------------------------------------------------------------+
```

---

## The 10-Tier Mastery Pyramid

```
===================================================================================
                     LINUX SYSTEMS ENGINEERING ROADMAP (10 TIERS)
===================================================================================
 [TIER 10]  Kernel Drivers, Concurrency & LKML Patches   │ You write Ring 0 C/Rust
 [TIER 09]  Performance Engineering, Triage & eBPF       │ You trace kernel live
 [TIER 08]  Container Primitives from Scratch            │ You build Docker by hand
 [TIER 07]  Storage Layer, Filesystems & io_uring        │ You master blk-mq & rings
 [TIER 06]  Process Lifecycles, Signals & /proc Internals│ You dissect task_struct
 [TIER 05]  Kernel Subsystems (VFS, MM, EEVDF, NET, IPC) │ You trace packets & pages
 [TIER 04]  Kernel Architecture, Boot & initramfs        │ You compile & boot QEMU
 [TIER 03]  Privilege Rings, MMU & Dynamic Linking       │ You cross Ring 0 boundary
 [TIER 02]  Distro Architectures, systemd & Modern Net   │ You administer servers
 [TIER 01]  Shell Pipelines, POSIX & Device Nodes (/dev) │ You start here
===================================================================================
```

---

## Curriculum Modules & Tiers Cross-Reference

| Module | Tier | Title | Core Focus & Mechanics | Direct Guide Link |
| :--- | :--- | :--- | :--- | :--- |
| **00** | — | **Engineering Roadmap** | Complete 10-tier curriculum, milestones, lab projects, and reading paths. | [Roadmap Guide](/docs/roadmap/) |
| **01** | **01, 02** | **Foundations & systemd** | POSIX permissions (SUID/SGID/Sticky), `/dev`, `sysfs`, `udev`, LVM, `systemd`, PAM. | [Foundations Guide](/docs/shell-and-sysadmin/) |
| **02** | **01** | **Linux History & Evolution** | Unix ancestry, 1991 MINIX origins, Tanenbaum debate, GPLv2 licensing. | [History Guide](/docs/linux-history/) |
| **03** | **02** | **Distribution Landscape** | Distro trees (Debian, RHEL, Arch, Alpine), `glibc` vs `musl`, package formats. | [Distros Guide](/docs/linux-distros/) |
| **04** | **03** | **Level & Layer Abstraction** | Ring 0 vs Ring 3, virtual address space, page tables, `syscall`, dynamic linker. | [Abstraction Guide](/docs/level-layer-abstraction/) |
| **05** | **04** | **Linux Kernel Architecture** | Monolithic tree, LKMs, UEFI & GRUB boot sequence, `initramfs`, QEMU. | [Kernel Guide](/docs/linux-kernel/) |
| **06** | **05** | **Linux Kernel Subsystems** | VFS, Buddy/SLUB allocators, EEVDF scheduler, Netfilter 5 hooks, `sk_buff`, IPC. | [Subsystems Guide](/docs/linux-kernel-subsystem/) |
| **07** | **06** | **Process Management** | `task_struct`, `fork()`/`clone()`, Copy-on-Write, Signals, nice values, `/proc/<PID>/`. | [Processes Guide](/docs/process-management/) |
| **08** | **07** | **Storage & io_uring** | Block layer (`blk-mq`), ext4 journaling, page cache dirty writeback, `io_uring`. | [Storage Guide](/docs/storage-and-io/) |
| **09** | **08** | **Container Primitives** | Hypervisors vs Containers, 7 Namespaces, cgroups v2, OverlayFS, `pivot_root`, Seccomp. | [Containers Guide](/docs/container-primitives/) |
| **10** | **09** | **Performance & eBPF** | Superuser triage (`vmstat`, `iostat`), Load Average D-state, kprobes, `bpftrace`, Flame Graphs. | [eBPF Guide](/docs/ebpf-and-observability/) |
| **11** | **10** | **Kernel Drivers & LKML** | Character drivers, user-kernel boundary, spinlocks, RCU, Rust in kernel, LKML patches. | [Drivers Guide](/docs/kernel-drivers-and-modules/) |

---

## Tier 01 — Shell Pipelines, POSIX & Device Nodes (`/dev`)

📖 **Full Guides:** [Shell & sysadmin](/docs/shell-and-sysadmin/) · [Linux History & Evolution](/docs/linux-history/)

**What you learn:** The Unix philosophy, POSIX standards, filesystem hierarchy, device nodes, stream redirection, and foundational history (inspired by *How Linux Works*, Chapters 1–3).

**Key concepts:**
- **The Unix Heritage & Evolution** — Ken Thompson and Dennis Ritchie at Bell Labs, Unix philosophy ("do one thing and do it well"), Linus Torvalds' 1991 announcement, Tanenbaum-Torvalds debate (monolithic kernel vs microkernel), and GNU GPLv2 licensing.
- **Filesystem Hierarchy Standard (FHS)** — The exact roles of `/etc` (host config), `/var` (variable data), `/proc` (virtual kernel process metrics), `/sys` (hardware device tree), and `/dev` (device nodes).
- **Device Nodes & `sysfs`** — Character vs. block devices, major/minor device numbers (`ls -l /dev`), dynamic kernel device discovery via `sysfs` and `systemd-udevd`.
- **Permission Bits & Special Flags** — Standard octal `rwx` permissions, SUID (`4000`), SGID (`2000`), and Sticky Bit (`1000`) for secure collaboration.
- **Text Pipelines & Shell Automation** — Stream redirection (`stdin`, `stdout`, `stderr`), `grep`, `awk`, `sed`, `sort`, `uniq`, `xargs`, signal trapping (`trap`), subshells, and process substitution.

**Hands-on Labs:**
- [ ] **Lab 1.1**: Author a shell script that parses Nginx web logs, counts HTTP 500 error occurrences per client IP, and outputs the top 10 offenders.
- [ ] **Lab 1.2**: Create a collaborative directory (`/srv/engineering`) with SGID and Sticky Bit flags so team files automatically inherit group ownership and cannot be deleted by unauthorized peers.
- [ ] **Lab 1.3**: Inspect `/dev` major/minor numbers with `ls -l /dev` and write a custom `udev` rule at `/etc/udev/rules.d/99-usb-backup.rules` to automatically symlink a designated USB device.
- [ ] **Lab 1.4**: Trace the history of the 1992 Tanenbaum-Torvalds debate and analyze why Linux's pragmatic monolithic design outperformed pure microkernels for general-purpose workloads.

---

## Tier 02 — Distro Architectures, `systemd` & Modern Networking

📖 **Full Guides:** [Linux Distributions](/docs/linux-distros/) · [Production Administration & systemd](/docs/shell-and-sysadmin/)

**What you learn:** Distro ecosystems, dynamic libraries (`glibc` vs `musl`), `systemd` PID 1 lifecycle management, 3-tier LVM storage, and modern network configuration (inspired by *How Linux Works*, Chapters 4–10).

**Key concepts:**
- **Distribution Architecture** — Upstream Linux kernel + C standard library (`glibc` vs `musl`) + Init system (`systemd`, OpenRC, runit) + package management (`apt`, `dnf`, `pacman`, `apk`). Contrasting Debian/Ubuntu LTS, Enterprise RHEL, Rolling Arch, and minimal container distros (Alpine, Wolfi).
- **`systemd` Service Supervision** — PID 1 initialization, unit types (`.service`, `.socket`, `.timer`), target synchronization, socket activation, and declarative security sandboxing (`ProtectSystem=strict`, `PrivateTmp=yes`, `NoNewPrivileges=yes`).
- **Disks, Partitions & 3-Tier LVM** — MBR (4 primary partitions, 2TB limit) vs GPT (GUID Partition Table with CRC32), Logical Volume Manager (Physical Volumes `PV` &rarr; Volume Groups `VG` &rarr; Logical Volumes `LV`), dynamic volume resizing, and persistent mounting via UUIDs in `/etc/fstab`.
- **Modern Networking & Packet Inspection** — The `iproute2` toolset (`ip link`, `ip addr`, `ip route`), socket state inspection with `ss -tulpn`, `nftables` stateful packet filtering, and DNS resolution paths in `/etc/resolv.conf`.
- **User Authentication & PAM** — `/etc/passwd`, shadow passwords `/etc/shadow`, Pluggable Authentication Modules (`/etc/pam.d/`), and hardened SSH bastions with Ed25519 cryptographic keys.

**Hands-on Labs:**
- [ ] **Lab 2.1**: Write a hardened `systemd` service unit for a custom application with strict resource limits (`MemoryMax=500M`, `CPUQuota=50%`) and filesystem isolation.
- [ ] **Lab 2.2**: Partition a 2GB loopback disk image with GPT, initialize an LVM volume group, format an ext4 logical volume, and mount it persistently via UUID in `/etc/fstab`.
- [ ] **Lab 2.3**: Expand an active LVM volume and ext4 filesystem online using `pvcreate`, `vgextend`, `lvextend -r` without unmounting.
- [ ] **Lab 2.4**: Compare static binary sizes and dynamic library dependencies across `glibc` (Debian) and `musl` (Alpine) using `ldd` and `readelf`.

---

## Tier 03 — Privilege Rings, MMU Paging & Dynamic Linking

📖 **Full Guide:** [Level & Layer Abstraction](/docs/level-layer-abstraction/)

**What you learn:** Hardware CPU protection boundaries, virtual memory address translation, the C standard library system call bridge, and dynamic link resolution.

**Key concepts:**
- **Hardware CPU Protection Rings** — Intel x86 Ring 0 (kernel privilege) vs Ring 3 (unprivileged user space). ARM Architecture: Exception Levels EL0 (Application), EL1 (Kernel/OS), EL2 (Hypervisor), EL3 (Firmware/Secure Monitor).
- **Virtual Address Space** — The 64-bit 128 TB user space / 128 TB kernel space split, non-canonical address holes, and kernel address isolation.
- **MMU & Multi-Level Page Tables** — 4-level and 5-level paging hierarchies (PGD &rarr; P4D &rarr; PUD &rarr; PMD &rarr; PTE), Translation Lookaside Buffer (TLB) caching, and Kernel Page Table Isolation (KPTI) against Meltdown side-channel attacks.
- **System Call Traps & vDSO** — Transitioning user space to kernel space via the `syscall` instruction, register calling conventions (`%rax`, `%rdi`, `%rsi`, `%rdx`, `%r10`, `%r8`, `%r9`), and zero-trap virtual dynamic shared objects (vDSO) for clock calls.
- **The C Library (glibc / musl) & Dynamic Linking** — Syscall wrappers, `errno` mapping, buffered standard I/O streams vs unbuffered POSIX syscalls, dynamic ELF linking (`/lib64/ld-linux-x86-64.so.2`, `/etc/ld.so.cache`), and Procedure Linkage Table (PLT) / Global Offset Table (GOT) resolution.

**Hands-on Labs:**
- [ ] **Lab 3.1**: Write a standalone C program using raw inline x86_64 assembly `syscall` instructions (bypassing glibc completely) to emit text to stdout and exit cleanly.
- [ ] **Lab 3.2**: Inspect `/proc/self/maps` and identify `.text`, `.data`, `[heap]`, `[stack]`, and `[vdso]` virtual memory mappings.
- [ ] **Lab 3.3**: Author a shared library in C that intercepts `getpid()` or `openat()` using `LD_PRELOAD` to subvert application execution dynamically.

---

## Tier 04 — Kernel Architecture, LKMs & Boot Sequence

📖 **Full Guide:** [Linux Kernel Architecture](/docs/linux-kernel/)

**What you learn:** The monolithic kernel source tree, authoring loadable kernel modules, early userspace `initramfs`, and compiling a customized kernel from vanilla source.

**Key concepts:**
- **Monolithic Architecture** — Single address space execution with dynamic modularity via Loadable Kernel Modules (LKM). Contrasting monolithic designs with microkernels and hybrid models.
- **Kernel Source Anatomy** — Navigating `arch/` (hardware architecture specifics), `mm/` (memory management), `fs/` (VFS and filesystems), `net/` (network stack), `drivers/` (hardware drivers), `kernel/` (core schedulers and locking), and `rust/` (Rust infrastructure).
- **Loadable Kernel Modules (LKM)** — Module lifecycle: `module_init()`, `module_exit()`, exported symbol tables (`EXPORT_SYMBOL_GPL`), module parameters (`module_param`), and runtime symbol inspection via `/proc/kallsyms`.
- **The Boot Pipeline from Silicon to PID 1** — UEFI firmware initialization &rarr; GRUB2 bootloader &rarr; kernel decompression (`vmlinuz`) &rarr; architecture setup (`start_kernel()`) &rarr; early userspace `initramfs` (cpio archive) &rarr; `/init` script & storage driver loading &rarr; `switch_root` / `pivot_root` &rarr; systemd PID 1 execution.
- **Kernel Preemption Modes** — Server throughput (`PREEMPT_NONE`), interactive desktop responsiveness (`PREEMPT_VOLUNTARY`), low-latency preemption (`PREEMPT_BUILD`), and deterministic real-time computing (`PREEMPT_RT`).

**Hands-on Labs:**
- [ ] **Lab 4.1**: Author a custom loadable kernel module with configurable integer parameters, compile with `Kdir` Makefiles, insert via `insmod`, and verify kernel logging in `dmesg`.
- [ ] **Lab 4.2**: Download the latest stable Linux kernel source from kernel.org, configure with `make defconfig`, compile on multi-core CPU (`make -j$(nproc)`), and boot the new kernel inside a minimal QEMU virtual machine.
- [ ] **Lab 4.3**: Unpack a production distribution `initramfs` cpio archive, audit its loaded storage modules, and analyze its early `/init` shell orchestration script.

---

## Tier 05 — Kernel Subsystems: VFS, MM, EEVDF, Netfilter & IPC

📖 **Full Guide:** [Linux Kernel Subsystems](/docs/linux-kernel-subsystem/)

**What you learn:** The five foundational subsystems inside the Linux kernel and their cooperative data structures.

**Key concepts:**
1. **Virtual File System (VFS)** — Unified filesystem abstraction: `struct super_block` (filesystem metadata), `struct inode` (file metadata and block pointers), `struct dentry` (directory path cache), and `struct file` (open file descriptors). Page cache integration and dirty buffer writeback.
2. **Memory Management (MM)** — Two-tier memory allocation: Buddy Allocator (contiguous physical page frames) and SLUB Allocator (fine-grained kernel object caches). Demand paging, minor vs major page faults, virtual memory areas (`vm_area_struct`), and the Out-Of-Memory (OOM) killer heuristic scoring.
3. **Process Scheduler (EEVDF)** — Scheduling policies (`SCHED_NORMAL`, `SCHED_FIFO`, `SCHED_DEADLINE`). Evolution from the Completely Fair Scheduler (CFS) to the Earliest Eligible Virtual Deadline First (EEVDF) scheduler in Linux 6.6+, lag compensation, and SMP multi-core load balancing.
4. **The Network Stack & Netfilter** — Zero-copy socket buffers (`struct sk_buff`), `iproute2` management, the 5 Netfilter packet filtering hooks (`PREROUTING`, `INPUT`, `FORWARD`, `OUTPUT`, `POSTROUTING`), `nftables` tables, NAPI interrupt mitigation (`ksoftirqd`), and line-rate eBPF eXpress Data Path (XDP).
5. **Inter-Process Communication (IPC)** — Asynchronous signals, anonymous pipes, Unix domain sockets with `SCM_RIGHTS` file descriptor passing, shared memory (`shmget`/`mmap`), and kernel fast userspace mutexes (`futex`).

**Hands-on Labs:**
- [ ] **Lab 5.1**: Allocate and dirty 128 MB of memory in a C program, monitoring minor and major page fault spikes in real time using `vmstat 1` and `sar -B`.
- [ ] **Lab 5.2**: Author a C client-server application that passes an open file descriptor over an `AF_UNIX` domain socket using `sendmsg()` and `SCM_RIGHTS`.
- [ ] **Lab 5.3**: Perform live network socket diagnostics using `ss -tulpn` and capture ICMP/TCP packets directly from the kernel network stack using `tcpdump -nn -i any`.

---

## Tier 06 — Process Lifecycles, Signals & `/proc` Diagnostics

📖 **Full Guide:** [Process & Thread Management](/docs/process-management/)

**What you learn:** How the kernel creates, executes, tracks, and terminates processes and threads, handles asynchronous signals, and exposes runtime state via `/proc`.

**Key concepts:**
- **The "No Threads" Architecture** — In Linux, threads are simply processes that share memory and file tables. Both processes and threads are represented identically by `struct task_struct`.
- **Identifiers & Lifecycle** — Process ID (`pid`) vs Thread Group ID (`tgid`). Process state machine: `TASK_RUNNING`, `TASK_INTERRUPTIBLE` (sleeping on I/O), `TASK_UNINTERRUPTIBLE` (`D` state blocked on hardware/disk), and `EXIT_ZOMBIE`.
- **Creation & Execution Pipeline** — `clone()` flags (`CLONE_VM`, `CLONE_FS`, `CLONE_FILES`, `CLONE_NEWPID`), Copy-On-Write (COW) memory duplication on `fork()`, and ELF binary parsing and address mapping via `execve()`.
- **Context Switching** — Timer interrupts &rarr; `schedule()` &rarr; `switch_mm()` (reloading CR3 page directory base) &rarr; `switch_to()` (assembly stack and register pointer swap).
- **Zombies & Orphan Reaping** — Why zombies consume zero memory yet leak PID table entries, why `kill -9` cannot kill a zombie, and how PID 1 reaps orphaned child processes via `waitpid()`.
- **Unix Signals & Priorities** — Signal delivery mechanics, catchable signals (`SIGHUP` for daemon reload, `SIGTERM` for graceful shutdown) vs uncatchable signals (`SIGKILL`, `SIGSTOP`), signal masks, POSIX `sigaction`, nice values (`-20` to `+19`), and `chrt` real-time scheduling.
- **The `/proc/<PID>/` Anatomy** — Dissecting `/proc/<PID>/cmdline`, `environ`, `fd/` open file descriptors, `status` (VmRSS, VmPeak, voluntary context switches), `limits`, and `wchan` (exact blocked kernel function).

**Hands-on Labs:**
- [ ] **Lab 6.1**: Write a C program that deliberately creates a zombie process, verify state `Z` in `ps aux`, and reap it cleanly using `waitpid()`.
- [ ] **Lab 6.2**: Trace a multi-threaded application using `strace -f` and identify the exact `clone()` flags used by the POSIX pthread library.
- [ ] **Lab 6.3**: Author a daemon in C using `sigaction` that catches `SIGHUP` to reload configuration dynamically without stopping, and audit its caught signal mask in `/proc/<PID>/status`.

---

## Tier 07 — Storage Layer, Filesystems & `io_uring`

📖 **Full Guide:** [Storage & io_uring](/docs/storage-and-io/)

**What you learn:** The lifecycle of a disk I/O request through the block layer, filesystem internals, page cache writeback tuning, and modern asynchronous zero-syscall `io_uring`.

**Key concepts:**
- **The Linux Block Layer** — From filesystem `write()` to physical storage: `struct bio` request structures, multi-queue architecture (`blk-mq`), and hardware I/O schedulers (`mq-deadline`, `bfq`, `none` for NVMe).
- **Filesystem Architectures** — Ext4 (journaling modes: `journal`, `ordered`, `writeback`), XFS (allocation groups and parallel allocation), and Btrfs (Copy-On-Write snapshots and subvolumes).
- **Inodes, Dentries & Ghost Files** — Inodes (metadata and data blocks) vs Dentries (name resolution cache), hard links vs soft links, and diagnosing ghost unlinked open files leaking disk capacity (`lsof +L1`).
- **Page Cache & Dirty Writeback Tuning** — Page cache buffering, Direct I/O (`O_DIRECT`), dirty ratio thresholds (`vm.dirty_ratio`, `vm.dirty_background_ratio`), and flushing via kernel `kworker` threads.
- **Modern Asynchronous `io_uring`** — Eliminating system call overhead via shared-memory ring buffers: Submission Queue (`SQ`) and Completion Queue (`CQ`), batching, zero-copy registered buffers, and kernel-side polling mode (`IORING_SETUP_SQPOLL`) for zero-syscall I/O.

**Hands-on Labs:**
- [ ] **Lab 7.1**: Author a C program using `liburing` that performs asynchronous file reads via submission and completion queue ring buffers.
- [ ] **Lab 7.2**: Benchmark `io_uring` against legacy `libaio` and synchronous POSIX `psync` using `fio` across varying queue depths (1 to 128).
- [ ] **Lab 7.3**: Trace disk block I/O request latency using BCC tools (`biosnoop`, `biolatency`) and analyze queue dispatch times.
- [ ] **Lab 7.4**: Simulate a ghost unlinked open file leak in C, detect the invisible disk space loss using `lsof +L1` and `/proc/<PID>/fd`, and reclaim the space.

---

## Tier 08 — Container Primitives & Sandboxing from Scratch

📖 **Full Guide:** [Container Primitives](/docs/container-primitives/)

**What you learn:** Building a production-grade container runtime from raw kernel primitives without Docker or containerd, contrasting hypervisors with containers, and applying defense-in-depth isolation.

**Key concepts:**
- **Hypervisors vs. Containers** — Type 1 (bare-metal) and Type 2 hypervisors, hardware virtualization (Intel VT-x / AMD-V) and QEMU hardware emulation vs. container zero-emulation direct CPU execution.
- **The 7 Linux Namespaces** — Virtualizing global kernel resources:
  1. `PID` (process tree isolation)
  2. `NET` (network interfaces, IP routing, firewall rules)
  3. `MNT` (mount points and filesystem tree)
  4. `UTS` (hostname and domain name)
  5. `IPC` (POSIX message queues and shared memory)
  6. `USER` (root in container mapped to unprivileged user on host)
  7. `CGROUP` (virtualized view of cgroups)
- **Control Groups v2 (cgroups v2)** — The unified hierarchy mounted at `/sys/fs/cgroup/`: setting hard memory limits (`memory.max`), CPU bandwidth constraints (`cpu.max`), process fork bomb protection (`pids.max`), and I/O rate limits (`io.max`).
- **Layered Filesystems & `pivot_root`** — OverlayFS mechanics (`lowerdir` read-only image layers + `upperdir` read-write container layer + `workdir` atomic merge = `merged` view). Why `pivot_root` is secure while `chroot` can be escaped.
- **Container Security & Sandboxing** — Linux capabilities (`cap_net_admin`, `cap_sys_admin`), Seccomp-BPF system call filtering, and Mandatory Access Control (AppArmor / SELinux).

**Hands-on Labs:**
- [ ] **Lab 8.1**: Build an entire isolated container runtime from scratch in a shell script using `unshare`, `pivot_root`, and an Alpine rootfs root.
- [ ] **Lab 8.2**: Create a custom cgroup v2 slice with `memory.max=50M`, execute a workload that allocates 100 MB of RAM, and verify the kernel OOM killer invocation in `dmesg`.
- [ ] **Lab 8.3**: Author a Seccomp-BPF filter in C that inspects system call numbers and terminates a process with `SIGSYS` if it attempts unauthorized system calls like `mkdir()`.

---

## Tier 09 — Performance Engineering, Systems Triage & eBPF

📖 **Full Guide:** [Performance & eBPF](/docs/ebpf-and-observability/)

**What you learn:** Classical superuser metrics triage, resolving the Load Average paradox, Brendan Gregg's performance methodologies, and deep dynamic kernel observability via eBPF.

**Key concepts:**
- **Classical Superuser Triage Toolkit** — High-speed triage with `uptime`, `vmstat 1`, `iostat -xz 1`, and `mpstat -P ALL 1`.
- **The Load Average Paradox** — Why Linux load average includes tasks in `TASK_UNINTERRUPTIBLE` (`D` state) waiting for disk I/O or locks, and why a system can report a load average of 20.0 with 0% CPU utilization.
- **Brendan Gregg's Methodologies** — The **USE Method** (Utilization, Saturation, Errors for every resource) and the **RED Method** (Rate, Errors, Duration for services).
- **Linux Probe Hierarchy** — Static Tracepoints (stable ABI in `/sys/kernel/debug/tracing/events`), Dynamic kprobes/kretprobes (kernel function entry/return), Dynamic Userspace uprobes/uretprobes (glibc and application binaries), and Hardware PMU counters.
- **The eBPF Virtual Machine Architecture** — Sandboxed RISC virtual machine inside the kernel: in-kernel static verifier (preventing panics and infinite loops), JIT compilation to native machine code, BPF maps (hash, array, ring buffers, per-CPU), and attach points (kprobes, tracepoints, XDP, TC).
- **Observability Tooling & Flame Graphs** — Writing high-level `bpftrace` scripts, leveraging BCC production diagnostic tools (`execsnoop`, `biolatency`, `tcpconnect`), and capturing CPU stack traces with `perf record` to generate interactive SVG Flame Graphs.

**Hands-on Labs:**
- [ ] **Lab 9.1**: Author a standalone eBPF program in C using `libbpf` and modern BPF CO-RE (Compile Once – Run Everywhere) to trace every `execve()` system call across the system.
- [ ] **Lab 9.2**: Write a `bpftrace` one-liner to generate a live logarithmic histogram of `vfs_read()` latency in microseconds.
- [ ] **Lab 9.3**: Profile a multi-threaded CPU-bound application using `perf record -F 99 -a -g -- sleep 30` and render an interactive SVG Flame Graph to pinpoint hot codepaths.
- [ ] **Lab 9.4**: Reproduce the *How Linux Works* Load Average Paradox: simulate a heavy synchronous disk write load using `dd ... oflag=sync`, verify elevated load average with low CPU utilization, and trace blocked `D`-state tasks in `vmstat`.

---

## Tier 10 — Kernel Drivers, Concurrency & Upstream LKML Patches

📖 **Full Guide:** [Kernel Drivers & LKML](/docs/kernel-drivers-and-modules/)

**What you learn:** Writing production-grade code that executes inside Ring 0, kernel synchronization primitives, Rust in the kernel, and the complete workflow for formatting and submitting patches to the Linux Kernel Mailing List.

**Key concepts:**
- **Character Device Driver Architecture** — Major and minor device allocation (`alloc_chrdev_region`), `struct cdev` registration, and mapping system calls to driver operations via `struct file_operations` (`open`, `read`, `write`, `unlocked_ioctl`, `release`).
- **The User↔Kernel Memory Boundary** — Why kernel code must never dereference user pointers directly, and how `copy_to_user()` and `copy_from_user()` enforce memory bounds checking and page fault handling.
- **Ring 0 Concurrency & Synchronization** — Spinlocks (atomic spinning, must NEVER sleep, disables interrupts), Mutexes (sleep-capable locks for long operations), and Read-Copy-Update (RCU lockless read concurrency with deferred memory reclaim).
- **Interrupt Handling Mechanics** — Top-half interrupt handlers (fast, acknowledge hardware, run with interrupts disabled) vs. bottom-half deferral mechanisms (`workqueues`, `tasklets`, `threaded_irqs`).
- **Rust in the Linux Kernel** — Authoring memory-safe kernel drivers using the upstream `kernel` crate (`rust/kernel/`), type-safe abstraction wrappers, and zero-cost safety guarantees.
- **Upstream LKML Patch Contribution** — Conforming to the Linux kernel coding style, auditing patches with `scripts/checkpatch.pl --strict`, identifying subsystem maintainers with `scripts/get_maintainer.pl`, generating commits via `git format-patch`, and transmitting patches to LKML using `git send-email`.

**Hands-on Labs:**
- [ ] **Lab 10.1**: Develop a complete character device driver (`/dev/ringbuf`) in C with a circular FIFO buffer, mutex concurrency protection, and safe `copy_to_user()` / `copy_from_user()` handling.
- [ ] **Lab 10.2**: Compile your driver against the running kernel headers, load it via `insmod`, create a device node with `mknod`, and test userspace bidirectional communication with `echo` and `cat`.
- [ ] **Lab 10.3**: Format a clean patch with `git format-patch -1`, validate it against kernel conventions using `checkpatch.pl --strict`, and identify the correct maintainer list using `get_maintainer.pl`.

---

## Industry Roles & Certification Alignment

This roadmap prepares engineers for both production operations and low-level systems engineering. Here is how the tiers map to industry roles and certifications:

| Target Role | Recommended Tiers | Relevant Industry Certifications | Primary Competencies |
| :--- | :--- | :--- | :--- |
| **Linux Systems Administrator** | **Tiers 01 – 03** | LFCS, CompTIA Linux+, RHCSA | Shell automation, FHS, permissions, device nodes, systemd, LVM, PAM, user security. |
| **Site Reliability Engineer (SRE)** | **Tiers 03 – 08** | LFCE, RHCE, CKA | Boot pipelines, subsystem triage, context switching, memory limits, storage I/O, socket states. |
| **Platform / Cloud Native Engineer** | **Tiers 07 – 09** | CKA, CKS, KCNA | Containers from scratch, namespaces, cgroups v2, OverlayFS, Seccomp, eBPF network filtering. |
| **Systems Performance Engineer** | **Tiers 05, 07, 09** | SRE / Performance Specialist | USE/RED methods, Load Average triage, kprobes/uprobes, bpftrace, BCC, CPU flame graphs. |
| **Linux Kernel & Embedded Engineer** | **Tiers 04 – 07, 10** | Embedded Linux / Kernel Developer | Monolithic tree, QEMU compile, LKMs, character drivers, spinlocks, RCU, Rust in kernel, LKML patches. |

---

## Recommended Reading & Definitive Literature

To master the depth of each tier, we recommend the following authoritative textbooks:

| Book | Author(s) | Primary Tiers | Why You Must Read It |
| :--- | :--- | :--- | :--- |
| **How Linux Works: What Every Superuser Should Know (3rd Ed.)** | Brian Ward | **Tiers 01, 02, 06, 09** | The definitive guide to how Linux actually works under the hood: devices, disks, boot sequence, networks, and systemd. |
| **Linux Kernel Development (3rd Ed.)** | Robert Love | **Tiers 04, 05, 06, 10** | The most accessible and clear explanation of kernel architecture, scheduling, interrupt handlers, and kernel data structures. |
| **Understanding the Linux Kernel (3rd Ed.)** | Daniel P. Bovet & Marco Cesati | **Tiers 03, 05, 06, 07** | The exhaustive academic reference for VFS, page tables, memory allocators, and process switching. |
| **Systems Performance: Enterprise and the Cloud (2nd Ed.)** | Brendan Gregg | **Tiers 07, 09** | The performance engineering bible covering the USE method, CPU/disk/network triage, perf, and eBPF. |
| **The Linux Programming Interface** | Michael Kerrisk | **Tiers 01, 03, 06, 07** | The definitive encyclopedia of POSIX system calls, process lifecycles, signals, sockets, and memory mappings. |
| **Linux Device Drivers (3rd Ed.)** | Jonathan Corbet, Alessandro Rubini, Greg Kroah-Hartman | **Tier 10** | The classic guide to authoring character drivers, block drivers, and hardware interrupt handlers. |
| **BPF Performance Tools** | Brendan Gregg | **Tier 09** | Practical cookbook for diagnosing operating systems and applications using eBPF and bpftrace. |

---

## Recommended Learning Strategy

To gain the most from this roadmap:

1. **Follow the Tiers Sequentially**: Do not skip to writing kernel drivers before understanding CPU rings, page tables, and memory allocators.
2. **Execute Every Lab on Real Systems**: Reading alone will not build intuition. Set up a dedicated Linux machine, cloud instance, or local VM using Vagrant, Multipass, or QEMU.
3. **Inspect the `/proc` and `/sys` Filesystems**: When running processes, inspect `/proc/<PID>/status`, `/proc/<PID>/fd/`, and `/sys/fs/cgroup/` to observe the kernel's active data structures.
4. **Read the Kernel Source**: Don't treat the kernel as a black box. Clone `git://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git` and inspect `include/linux/sched.h`, `include/linux/fs.h`, and `mm/page_alloc.c`.
5. **Engage with the Community**: Join technical discussions on the [CloudNativeFolks Discord](https://discord.gg/rEvr7vq) and share your lab findings with fellow systems engineers!
