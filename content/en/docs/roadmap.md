---
title: Linux Systems Engineering Roadmap
slug: roadmap
---

> *"Talk is cheap. Show me the code."* — **Linus Torvalds**

A step-by-step path from your first terminal command to writing kernel drivers and submitting patches upstream. Each tier builds on the previous one — follow them in order.

---

## The 10-Tier Learning Path

```
 Tier 10 ─ Kernel Drivers & Upstream Patches        ← You write kernel code
 Tier 09 ─ Performance Engineering & eBPF            ← You trace the kernel live
 Tier 08 ─ Containers from Scratch                   ← You build Docker by hand
 Tier 07 ─ Storage, Filesystems & io_uring           ← You master disk I/O
 Tier 06 ─ Processes, Threads & Context Switching    ← You understand task_struct
 Tier 05 ─ Kernel Subsystems (VFS, MM, Sched, Net)   ← You read kernel source
 Tier 04 ─ Kernel Architecture & Boot Sequence       ← You compile a kernel
 Tier 03 ─ Protection Rings, MMU & System Calls      ← You cross the Ring 0 boundary
 Tier 02 ─ systemd, Storage & Networking             ← You administer servers
 Tier 01 ─ Shell, Permissions & POSIX Basics         ← You start here
```

---

## Tier 01 — Shell, Permissions & POSIX Basics

📖 **[Full Guide →](/docs/shell-and-sysadmin/)**

**What you learn:** The Unix philosophy, filesystem hierarchy, file permissions, and shell scripting.

**Key concepts:**
- Filesystem Hierarchy Standard — what `/etc`, `/var`, `/proc`, `/sys`, `/dev` are for
- Permission bits — `rwx` octal notation, SUID (`4000`), SGID (`2000`), Sticky Bit (`1000`)
- Text processing pipelines — `grep`, `awk`, `sed`, `sort`, `uniq`, `xargs`
- Shell scripting — exit codes, signals, job control, process substitution

**Labs:**
- [ ] Write a shell script that parses Nginx logs, counts HTTP 500 errors per IP, and shows the top 10
- [ ] Create a shared directory with SGID + Sticky Bit so team files inherit group and can't be deleted by others

---

## Tier 02 — systemd, Storage & Networking

📖 **[Full Guide →](/docs/shell-and-sysadmin/)**

**What you learn:** Managing services, disks, networks, and SSH on production Linux servers.

**Key concepts:**
- **systemd** — PID 1, unit files (`.service`, `.socket`, `.timer`), sandboxing (`ProtectSystem`, `PrivateTmp`)
- **Storage** — GPT partitioning, LVM (PV → VG → LV), ext4 vs XFS vs Btrfs
- **Networking** — `ip link/addr/route`, `ss -tulpn`, nftables firewall rules
- **SSH** — Ed25519 keys, disabling password auth, agent forwarding

**Labs:**
- [ ] Write a `systemd` service with cgroup limits (`MemoryMax=500M`, `CPUQuota=50%`) and security sandboxing
- [ ] Partition a disk with GPT, create an LVM volume group, format as XFS, and mount via `/etc/fstab`

---

## Tier 03 — Protection Rings, MMU & System Calls

📖 **[Full Guide →](/docs/level-layer-abstraction/)**

**What you learn:** How CPU hardware enforces isolation between user programs and the kernel.

**Key concepts:**
- **CPU rings** — Ring 0 (kernel) vs Ring 3 (user). ARM: EL0/EL1/EL2/EL3
- **Virtual address space** — 128 TB user / 128 TB kernel split, non-canonical hole
- **Page tables** — PGD → P4D → PUD → PMD → PTE, TLB cache, KPTI
- **System calls** — `syscall` instruction, register conventions (`%rax`, `%rdi`, `%rsi`...), vDSO

**Labs:**
- [ ] Write a C program using raw inline assembly `syscall` (no glibc) to print a message to stdout
- [ ] Inspect `/proc/self/maps` and identify `.text`, `[heap]`, `[stack]`, and `[vdso]` regions

---

## Tier 04 — Kernel Architecture & Boot Sequence

📖 **[Full Guide →](/docs/linux-kernel/)**

**What you learn:** How the Linux kernel is structured and how a machine boots from power-on to PID 1.

**Key concepts:**
- **Monolithic kernel** — All subsystems in one address space; modularity via Loadable Kernel Modules
- **Source tree** — `arch/`, `mm/`, `fs/`, `net/`, `drivers/`, `kernel/`, `init/`, `rust/`
- **LKM basics** — `module_init()`, `module_exit()`, `EXPORT_SYMBOL_GPL`, `/proc/kallsyms`
- **Boot pipeline** — UEFI → GRUB → `vmlinuz` decompress → `start_kernel()` → initramfs → `pivot_root` → PID 1
- **Preemption** — `PREEMPT_NONE` (servers) → `PREEMPT_VOLUNTARY` (desktop) → `PREEMPT_RT` (real-time)

**Labs:**
- [ ] Write a kernel module with configurable parameters, insert it with `insmod`, verify output in `dmesg`
- [ ] Download kernel source from kernel.org, configure with `make defconfig`, compile, and boot in QEMU

---

## Tier 05 — Kernel Subsystems (VFS, MM, Scheduler, Net, IPC)

📖 **[Full Guide →](/docs/linux-kernel-subsystem/)**

**What you learn:** The five core engines inside the Linux kernel and how they cooperate.

**Key concepts:**
1. **VFS** — `super_block`, `inode`, `dentry`, `file`; page cache and dirty writeback
2. **Memory Manager** — Buddy allocator (page frames), SLUB allocator (kernel objects), demand paging, OOM killer
3. **Scheduler** — `SCHED_NORMAL`, `SCHED_FIFO`, `SCHED_DEADLINE`; CFS → EEVDF (Linux 6.6+); SMP load balancing
4. **Networking** — `sk_buff` lifecycle, NAPI polling, Netfilter hooks, eBPF XDP
5. **IPC** — Signals, pipes, Unix sockets (`SCM_RIGHTS` fd passing), shared memory + futex

**Labs:**
- [ ] Monitor page faults with `vmstat 1` and `sar -B` while a program allocates and touches 128 MB of memory
- [ ] Write a C program that passes an open file descriptor over a Unix socket using `sendmsg()` and `SCM_RIGHTS`

---

## Tier 06 — Processes, Threads & Context Switching

📖 **[Full Guide →](/docs/process-management/)**

**What you learn:** How the kernel represents, creates, and switches between running programs.

**Key concepts:**
- **`task_struct`** — `pid` vs `tgid`, process states (`RUNNING`, `INTERRUPTIBLE`, `ZOMBIE`)
- **`clone()` flags** — `CLONE_VM` (share memory = thread), `CLONE_FILES`, `CLONE_NEWPID` (container)
- **Copy-On-Write** — `fork()` shares pages read-only, write triggers page fault → `do_wp_page()` allocates new frame
- **`execve()`** — Validates ELF magic (`7F 45 4C 46`), maps `.text`/`.data`/`.bss`, sets up stack
- **Context switch** — Timer interrupt → `schedule()` → `switch_mm()` (new CR3) → `switch_to()` (swap `%rsp`)
- **Zombies** — Why they exist, why `kill -9` doesn't work on them, how PID 1 reaps orphans

**Labs:**
- [ ] Write a C program that creates a zombie process, verify it shows state `Z` in `ps`, then reap it with `waitpid()`
- [ ] Use `strace -f` on a multi-threaded program and observe the `clone()` flags

---

## Tier 07 — Storage, Filesystems & io_uring

📖 **[Full Guide →](/docs/storage-and-io/)**

**What you learn:** How data flows from `write()` to physical disk, and how `io_uring` eliminates syscall overhead.

**Key concepts:**
- **Block layer** — `struct bio`, multi-queue `blk-mq`, I/O schedulers (`mq-deadline`, `bfq`, `none`)
- **Direct I/O** — `O_DIRECT` bypasses page cache; requires aligned buffers
- **Filesystems** — Ext4 (journaling modes), XFS (allocation groups), Btrfs (COW snapshots)
- **Page cache tuning** — `vm.dirty_ratio`, `vm.dirty_background_ratio`, `[kworker]` flusher threads
- **`io_uring`** — Shared-memory SQ/CQ ring buffers, zero-copy I/O, `SQPOLL` mode for zero-syscall I/O

**Labs:**
- [ ] Write a C program using `liburing` to read a file asynchronously via submission/completion queues
- [ ] Benchmark `io_uring` vs `libaio` vs `psync` using `fio` with varying queue depths

---

## Tier 08 — Containers from Scratch

📖 **[Full Guide →](/docs/container-primitives/)**

**What you learn:** Containers are just processes. You'll build one from raw kernel primitives — no Docker needed.

**Key concepts:**
- **Namespaces** — The 7 isolation boundaries: PID, NET, MNT, UTS, IPC, USER, CGROUP
- **cgroups v2** — Unified hierarchy at `/sys/fs/cgroup`; `memory.max`, `cpu.max`, `pids.max`, `io.max`
- **OverlayFS** — Layered filesystem (read-only lower + read-write upper = merged view)
- **`pivot_root`** — Secure root filesystem swap (vs. escapable `chroot`)
- **Security** — Linux capabilities, Seccomp-BPF syscall filtering, AppArmor/SELinux

**Labs:**
- [ ] Build a container runtime using `unshare`, `pivot_root`, and an Alpine rootfs in a shell script
- [ ] Create a cgroup with `memory.max=50M`, run a process that allocates 100 MB, and observe the OOM kill in `dmesg`
- [ ] Write a Seccomp-BPF filter in C that kills a process when it attempts `mkdir()`

---

## Tier 09 — Performance Engineering & eBPF

📖 **[Full Guide →](/docs/ebpf-and-observability/)**

**What you learn:** How to find and fix performance bottlenecks using kernel tracing and eBPF programs.

**Key concepts:**
- **Methodology** — Brendan Gregg's USE (Utilization/Saturation/Errors) and RED (Rate/Errors/Duration)
- **Probe types** — Tracepoints (stable/static), kprobes (dynamic kernel), uprobes (dynamic userspace), PMU counters
- **eBPF** — In-kernel VM with verifier + JIT; BPF maps (hash, ringbuf, per-CPU); attach to any hook point
- **Tools** — `perf record/script`, `bpftrace` one-liners, BCC tools (`execsnoop`, `biolatency`, `tcpconnect`)
- **Flame Graphs** — Visualize CPU call stacks; wide plateaus = hotspots

**Labs:**
- [ ] Write a `bpftrace` one-liner that histograms `vfs_read()` latency in microseconds:
  ```bash
  bpftrace -e 'kprobe:vfs_read { @start[tid] = nsecs; } kretprobe:vfs_read /@start[tid]/ { @us = hist((nsecs - @start[tid]) / 1000); delete(@start[tid]); }'
  ```
- [ ] Profile a process with `perf record -F 99 -a -g -- sleep 30`, then generate an SVG flame graph
- [ ] Write a standalone eBPF program in C that traces every `execve()` and logs PID + binary path

---

## Tier 10 — Kernel Drivers & Upstream Patches

📖 **[Full Guide →](/docs/kernel-drivers-and-modules/)**

**What you learn:** Writing code that runs in Ring 0 and getting it accepted into the Linux kernel.

**Key concepts:**
- **Character drivers** — `alloc_chrdev_region`, `struct cdev`, `struct file_operations` (`open`, `read`, `write`)
- **User↔Kernel boundary** — `copy_to_user()` / `copy_from_user()` (never dereference user pointers directly!)
- **Synchronization** — Spinlocks (never sleep!), Mutexes (can sleep), RCU (lockless reads, deferred reclaim)
- **Rust in the kernel** — Memory-safe drivers via the `kernel` crate (`rust/kernel/`)
- **Patch workflow** — `scripts/checkpatch.pl`, `git format-patch`, `git send-email` to LKML

**Labs:**
- [ ] Write a character device driver (`/dev/ringbuf`) with a circular buffer, mutex locking, and `copy_to_user()`
- [ ] Test your driver: `echo "hello" > /dev/ringbuf` then `cat /dev/ringbuf`
- [ ] Format a patch with `git format-patch`, validate with `checkpatch.pl --strict`

---

## Recommended Reading

| Book | Author | Best For |
| :--- | :--- | :--- |
| **Linux Kernel Development (3rd Ed.)** | Robert Love | Clear kernel architecture introduction |
| **Understanding the Linux Kernel (3rd Ed.)** | Bovet & Cesati | Deep reference for MM, scheduler, VFS |
| **Systems Performance (2nd Ed.)** | Brendan Gregg | Performance analysis and eBPF |
| **The Linux Programming Interface** | Michael Kerrisk | Complete syscall and POSIX API reference |
| **Linux Device Drivers (3rd Ed.)** | Corbet, Rubini, Kroah-Hartman | Driver and module development |
