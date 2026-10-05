---
layout: project
title: sEMG features for movement classification
context: EPFL · Neural Signals and Signal Processing coursework
card_period: MSc coursework
period: During MSc in Life Sciences Engineering
role: Feature extraction, selection, comparison, and stability analysis
summary: Extracted and compared sEMG features, selected informative descriptors, and assessed their stability across subjects in a group movement-classification project.
excerpt: Investigated feature choice and stability for sEMG movement classification using the Ninapro dataset.
evidence_label: Focus
evidence: Evaluated which signal features remained informative across subjects and exercises.
areas: [Data analysis, Neuroengineering]
area_keys: [data-analysis]
skills: [Biosignal processing, Feature selection, Critical evaluation]
tools: [Surface electromyography, Ninapro dataset, Time-domain features, Frequency-domain features, Mutual information, Feature stability analysis]
image: /assets/images/projects/semg-features.svg
image_alt: Conceptual sequence from sEMG channels to signal descriptors and comparison of feature importance across subjects.
image_caption: Summary of my feature-analysis contribution. The waveform is illustrative and does not represent a participant recording.
order: 5
---

## Engineering challenge

A movement classifier can perform well on one person's muscle signals and struggle on another's. In this group project, we used the Ninapro surface electromyography (sEMG) dataset to investigate how well movement classification generalized across subjects.

## My contribution

- Extracted time- and frequency-domain descriptors from the signals, including amplitude, variability, power, and frequency measures.
- Compared feature choices and their ability to describe differences between movements and subjects.
- Selected informative features using mutual information and examined the stability of their rankings across subjects.
- Analyzed which descriptors appeared consistently among the most informative features for different exercises.

My responsibility was the feature-related work. The broader classifier comparison and evaluation were group results.

## Approach and decisions

The feature analysis included measures such as root mean square, mean absolute value, standard deviation, waveform length, and frequency descriptors. We selected 40 features using mutual information and compared the most informative descriptors across subjects and exercises.

This made feature choice an evaluation question: a descriptor could rank highly for classification while still varying substantially between people. I examined both the selected features and their stability to understand that distinction.

## Results and limits

The presentation identified several consistently important descriptors, including RMS, standard deviation, and amplitude measures from particular channels. The group's classification results nevertheless showed a substantial drop when transferring between subjects.

This coursework demonstrated the importance of assessing generalization alongside feature importance. The findings apply to the reported dataset and evaluation; they do not establish a deployable prosthesis-control system.
