---
title: Overview
url: "docs/overview"
aliases:
- "/docs"
---

Welcome to **Linux Collective** — a community-driven knowledge base and collaborative initiative dedicated to Linux systems, kernel engineering, and cloud native architectures.

## What is Linux Collective?

Linux Collective is an open-source initiative founded by [CloudNativeFolks](https://blog.cloudnativefolks.org) to empower developers, system administrators, and infrastructure engineers with deep-dive technical insights into the Linux operating system.

We bridge the gap between basic shell usage and advanced kernel systems:
- **Low-Level Fundamentals**: Syscalls, memory virtualization, CPU rings, and hardware interrupts.
- **Kernel Architecture**: The monolithic kernel design, Linux Kernel Modules (LKM), and device driver models.
- **Subsystem Mechanics**: The Virtual File System (VFS), page cache, memory management (buddy allocator & slab), IPC, and network packet flow.
- **Container Primitives**: Namespaces, cgroups (v1/v2), and eBPF tooling powering modern cloud native platforms like Docker and Kubernetes.

---

## Learning Curriculum & Modules

Explore our step-by-step documentation curriculum:

| Module | Title | Focus & Description |
| :--- | :--- | :--- |
| **00** | [Engineering Roadmap](/docs/roadmap/) | The complete 10-tier learning pyramid from shell fundamentals to eBPF and LKML upstream patch contribution. |
| **01** | [Foundations & systemd](/docs/shell-and-sysadmin/) | POSIX standards, special permissions (SUID/SGID/Sticky), FHS hierarchy, and hardened `systemd` sandboxes. |
| **02** | [Linux History](/docs/linux-history/) | Unix ancestry, Linus Torvalds' 1991 release, GPLv2 adoption, and milestone chronologies. |
| **03** | [Linux Distros](/docs/linux-distros/) | Distribution trees (Debian, RHEL, Arch, Alpine), package ecosystems, and cloud micro-distros. |
| **04** | [Level & Layer Abstraction](/docs/level-layer-abstraction/) | Hardware vs. Kernel vs. User space, privilege rings (Ring 0 / Ring 3), and standard C library boundaries. |
| **05** | [Linux Kernel](/docs/linux-kernel/) | Monolithic architecture, kernel source breakdown, compile sequence, and loadable kernel modules. |
| **06** | [Linux Kernel Subsystems](/docs/linux-kernel-subsystem/) | The 5 core subsystems: Process Scheduler, Memory Management, VFS, Network Stack, and IPC. |
| **07** | [Process Management](/docs/process-management/) | Process lifecycles, `task_struct`, `fork()` / `exec()` mechanics, PID allocation, and state transitions. |
| **08** | [Storage & io_uring](/docs/storage-and-io/) | Block I/O layer, `struct bio`, Page Cache dirty writeback, and asynchronous `io_uring` ring buffers. |
| **09** | [Container Primitives](/docs/container-primitives/) | Building containers from scratch with the 7 Linux Namespaces, cgroups v2 resource limits, and OverlayFS. |
| **10** | [Performance & eBPF](/docs/ebpf-and-observability/) | Brendan Gregg's USE method, dynamic kprobes/uprobes, `bpftrace`, `perf` flame graphs, and C eBPF programs. |
| **11** | [Kernel Drivers & LKML](/docs/kernel-drivers-and-modules/) | Character device drivers, user-kernel memory boundaries, spinlocks, RCU synchronization, and patch formatting. |

---

## Why Master Linux?

1. **The Backbone of Cloud Computing**: Over 90% of the world's top 1 million servers, cloud instances (AWS, GCP, Azure), and virtually 100% of the world's top 500 supercomputers run on Linux.
2. **True Open Source Collaboration**: The Linux kernel repository represents one of the largest cooperative engineering projects in human history.
3. **Foundation for Cloud Native & Containers**: Containers are not virtual machines — they are isolated Linux processes governed by **namespaces** and constrained by **cgroups**.
4. **Performance & Observability**: Tools like `perf`, `bcc/BPF`, `ftrace`, and eBPF grant complete visibility into system calls, hardware counters, and latency bottlenecks.

---

## Community & Contributing

Linux Collective is made by the community, for the community:
- 💬 **Join our Discussions**: Connect with fellow engineers on the [CloudNativeFolks Discord](https://discord.gg/rEvr7vq).
- 🎥 **Watch Technical Sessions**: Subscribe to [CloudNativeFolks on YouTube](https://www.youtube.com/@CloudNativeFolks).
- 🛠️ **Contribute**: Fix typos, add illustrations, or author new guides on our [GitHub Repository](https://github.com/linuxcollective/linuxcollective.github.io).
